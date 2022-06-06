import {AxiosError} from 'axios';
import {useState} from 'react';
import Config from 'react-native-config';
import http from '../../../http';
import TimeZoneType from '../../../types/api/TimeZoneType';
import {objectToQueryString} from '../../../utils/url-helper';

const useTimeZone = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const [data, setData] = useState<TimeZoneType | undefined>(undefined);

  const getTimeZone = (lat: string, lng: string) => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    const queryObj = {
      key: Config.TIMEZONE_API_KEY,
      format: 'json',
      by: 'position',
      lat,
      lng,
    };
    http
      .get<TimeZoneType>(`/get-time-zone?${objectToQueryString(queryObj)}`)
      .then(({data}) => {
        setLoading(false);
        setData(data);
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        setError(err.response?.data);
      });
  };

  return {loading, error, data, getTimeZone};
};

export default useTimeZone;

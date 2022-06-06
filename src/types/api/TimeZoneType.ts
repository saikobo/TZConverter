type TimeZoneType = {
  abbreviation: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  dst: number;
  formatted: string;
  gmtOffset: number;
  message: string;
  nextAbbreviation: null;
  regionName: string;
  status: 'FAILED' | 'OK';
  timestamp: 0;
  zoneEnd: null;
  zoneName: string;
  zoneStart: 0;
};

export default TimeZoneType;

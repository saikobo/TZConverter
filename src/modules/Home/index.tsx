import dayjs from 'dayjs';
import React, {createRef, ReactElement, useState} from 'react';
import {ScrollView, TextInput, Button, Text, View} from 'react-native';
import Input from '../../components/Input';
import useTimeZone from './hooks/useTimeZone';
import styles from './styles';

const Home = (): ReactElement => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');

  const {getTimeZone, data, loading} = useTimeZone();

  const longRef = createRef<TextInput>();

  const focusNextInput = () => longRef.current?.focus();

  const onSubmit = () => {
    getTimeZone(latitude, longitude);
  };

  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder="Enter Latitude"
        value={latitude}
        onChangeText={setLatitude}
        autoFocus
        returnKeyType="next"
        onSubmitEditing={focusNextInput}
        blurOnSubmit={false}
      />
      <Input
        reference={longRef}
        placeholder="Enter Longitude"
        value={longitude}
        onChangeText={setLongitude}
        returnKeyType="done"
      />
      <Text style={styles.message}>{data?.message}</Text>
      {data?.status === 'OK' && (
        <View>
          <Text>
            Time in: {data.zoneName} is {dayjs(1654459424).format('HH:mm a')}
          </Text>
        </View>
      )}
      <Button disabled={loading} title="Get Time Zone" onPress={onSubmit} />
    </ScrollView>
  );
};

export default Home;

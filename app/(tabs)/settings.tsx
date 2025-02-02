import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';

const SettingsScreen = () => {
  const { startDate, startTime, endDate, endTime, duration, userId } = useLocalSearchParams();

  // Call saveSleepDataToDatabase when the component mounts or on some event (e.g., button press)
  useEffect(() => {
    // Optionally, call the function here or via a button
    // saveSleepDataToDatabase();
  }, []); // Uncomment this to save data when the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Báo cáo giấc ngủ</Text>
      <View style={styles.statsBox}>
        <Text style={styles.text}>Ngày ngủ: {startDate}</Text>
        <Text style={styles.text}>Thời gian ngủ: {startTime}</Text>
        <Text style={styles.text}>Ngày dậy: {endDate}</Text>
        <Text style={styles.text}>Thời gian dậy: {endTime}</Text>
        <Text style={styles.text}>Tổng thời gian ngủ: {formatDuration(duration)}</Text>
      </View>
    </View>
  );
};

const formatDuration = (duration) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000022',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    color: '#f5f5f5'
  },
  title: {
    marginBottom: 40,
    fontSize: 40,
    marginVertical: 5,
    color: '#f5f5f5'
  },
  statsBox: {
    backgroundColor: '#292D63',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center'
  }
});

export default SettingsScreen;

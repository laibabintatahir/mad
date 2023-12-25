// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// const ScheduleServiceScreen = ({ route }) => {
//   const { service } = route.params;
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     setSelectedDate(date);
//     hideDatePicker();
//   };

//   const handleSchedule = () => {
//     // Implement your logic for scheduling the service
//     // You can use the selectedDate and service details for scheduling
//     console.log('Service scheduled on:', selectedDate);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Schedule Service</Text>
//       <Text style={styles.serviceName}>{service.name}</Text>

//       {/* Button to show date picker */}
//       <Button title="Pick a Date" onPress={showDatePicker} />

//       {/* Date picker modal */}
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="datetime"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />

//       {/* Button to confirm and schedule the service */}
//       <Button title="Schedule" onPress={handleSchedule} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   serviceName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#953553',
//   },
// });

// export default ScheduleServiceScreen;

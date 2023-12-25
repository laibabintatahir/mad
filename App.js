// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import ServicesScreen from "./Screens/ServicesScreen";
import ServiceDetailScreen from "./Screens/ServiceDetailScreen";
import FeedbackScreen from "./Screens/FeedbackScreen";
import FAQScreen from "./Screens/FaqScreen";
import HomeScreen from './Screens/HomeScreen';
import UserProfileScreen from "./Screens/ProfileScreen";
import SchedulePickupScreen from "./Screens/SchedulePickupScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";
import SuccessScreen from "./Screens/SuccessScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <Stack.Screen name="FAQScreen" component={FAQScreen} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
        <Stack.Screen name="ProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="SchedulePickupScreen" component={SchedulePickupScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Services">
//           <Stack.Screen name="Services" component={ServicesScreen} />
//           <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
//           {/* <Stack.Screen
//             name="ScheduleServiceScreen"
//             component={ScheduleServiceScreen}
//           /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

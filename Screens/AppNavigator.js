// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ServicesScreen from './ServicesScreen';
import ServiceDetailScreen from './ServiceDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Services: ServicesScreen,
    ServiceDetail: ServiceDetailScreen,
  },
  {
    initialRouteName: 'Services',
  }
);

export default createAppContainer(AppNavigator);

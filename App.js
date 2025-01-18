import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Sayfalar
import ReportsScreen from './screens/ReportsScreen';
import DashboardScreen from './screens/DashboardScreen'; // Yeni sayfalar bu şekilde import edilir.

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reports">
        <Stack.Screen name="Reports" component={ReportsScreen} options={{ title: 'Raporlar' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
        {/* Yeni sayfalar buraya eklenir */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
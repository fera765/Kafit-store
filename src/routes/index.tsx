import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home.routes';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    mode="card"
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

export default Routes;

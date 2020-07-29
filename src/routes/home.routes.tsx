import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../components/BottomTab';
import Home from '../pages/Home';
import Hearts from '../pages/Hearts';
import Cart from '../pages/Cart';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigators: React.FC<{}> = () => (
  <Tab.Navigator
    lazy
    backBehavior="none"
    initialRouteName="Home"
    tabBar={props => <BottomTab adaptive key={props.state.index} {...props} />}
  >
    <Tab.Screen
      name="Home"
      options={{ title: 'Home', tabBarLabel: 'home' }}
      component={Home}
    />
    <Tab.Screen
      name="Heart"
      options={{ title: 'Favoritos', tabBarLabel: 'heart' }}
      component={Hearts}
    />
    <Tab.Screen
      name="Cart"
      options={{ title: 'Carrinho', tabBarLabel: 'shopping-bag' }}
      component={Cart}
    />
    <Tab.Screen
      name="User"
      options={{ title: 'user', tabBarLabel: 'user' }}
      component={SettingsScreen}
    />
  </Tab.Navigator>
);

export default TabNavigators;

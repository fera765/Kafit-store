import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ProviderCart } from './cart';
import { navigationRef } from './navigators';

const Container: React.FC = ({ children }) => {
  return (
    <ProviderCart>
      <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
    </ProviderCart>
  );
};

export default Container;

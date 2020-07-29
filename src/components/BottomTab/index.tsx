import React, { useEffect, useLayoutEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Animated } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCart } from '../../hooks/cart';

import {
  Container,
  NavigationButtons,
  BoxActive,
  BoxActiveText,
  BoxCartQuantity,
  BoxCartQuantityText,
  ImageBoxButton,
  ImageBox,
  Image,
  BoxActiveUserText,
} from './style';

const TabNavigator: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { products } = useCart();
  const [opacitys] = useState(new Animated.Value(1));
  useEffect(() => {
    const quantity = products.map(prod => prod.quantity);
    if (quantity.length > 0) {
      Animated.sequence([
        Animated.timing(opacitys, {
          toValue: 1.5,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacitys, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [products, opacitys]);

  function handleNavigation(focus: boolean, page: string) {
    if (!focus) {
      navigation.navigate(page);
    }
  }
  return (
    <Container>
      <NavigationButtons>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined ? options.tabBarLabel : '';

          const isFocused = state.index === index;

          return (
            <View key={route.name}>
              {route.name !== 'User' && (
                <BoxActive
                  isFocused={isFocused}
                  accessibilityRole="button"
                  onPress={() => handleNavigation(isFocused, route.name)}
                >
                  {route.name === 'Cart' && products.length > 0 && (
                    <BoxCartQuantity isFocused={isFocused}>
                      <BoxCartQuantityText>
                        {products.length}
                      </BoxCartQuantityText>
                    </BoxCartQuantity>
                  )}
                  <Animated.View
                    style={{
                      width: null,
                      height: null,
                      transform: [
                        {
                          scale: route.name === 'Cart' ? opacitys : 1,
                        },
                      ],
                    }}
                  >
                    <Icon
                      name={label.toString()}
                      size={23}
                      color={isFocused ? '#444' : '#ccc'}
                    />
                  </Animated.View>
                  <BoxActiveText isFocused={isFocused}>
                    {options.title}
                  </BoxActiveText>
                </BoxActive>
              )}
              {route.name === 'User' && (
                <ImageBoxButton
                  isFocused={isFocused}
                  onPress={() => handleNavigation(isFocused, route.name)}
                >
                  <ImageBox>
                    <Image
                      source={{
                        uri:
                          'https://avatars2.githubusercontent.com/u/35400150?s=460&u=1e524bce20bdf0c7aabb032d06e41709009b69f5&v=4',
                      }}
                      style={{ resizeMode: 'stretch' }}
                    />
                  </ImageBox>
                  <BoxActiveUserText isFocused={isFocused}>
                    Mateus
                  </BoxActiveUserText>
                </ImageBoxButton>
              )}
            </View>
          );
        })}
      </NavigationButtons>
    </Container>
  );
};

export default TabNavigator;

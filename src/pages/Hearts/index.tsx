import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container } from './style';

const Hearts: React.FC = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [animation] = useState(new Animated.Value(0));
  const [animation4] = useState(new Animated.Value(1));
  const [animar, setAnimar] = useState(0);

  function handleAnimation(item: number) {
    if (animar === 0) {
      const { width, height } = Dimensions.get('window');
      setAnimar(item);
      Animated.sequence([
        Animated.timing(animation4, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animation4, {
          toValue: 6,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: width,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start(() => {
        animation4.setValue(1);
        animation.setValue(0);
        setAnimar(0);
      });
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {products.map(product => (
        <TouchableOpacity
          key={product}
          onPress={() => handleAnimation(product)}
          style={{ marginBottom: 20 }}
        >
          <Animated.View
            style={{
              zIndex: 900,
              transform: [
                { scale: animar === product ? animation4 : 1 },
                { translateY: animar === product ? animation : 0 },
                {
                  translateX: animar === product ? animation : 0,
                },
                // {
                //   rotate: animation3.interpolate({
                //     inputRange: [0, 360],
                //     outputRange: ['0deg', '432deg'],
                //   }),
                // },
              ],
            }}
          >
            <Icon name="cart" size={30} color="#f00" />
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Hearts;

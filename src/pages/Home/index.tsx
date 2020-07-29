import React, { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity, Animated, Dimensions } from 'react-native';

import { useCart } from '../../hooks/cart';
import api from '../../service/api';

import {
  Container,
  ContainerProducts,
  BoxProduct,
  QuantityAdd,
  QuantityAddText,
  Image,
  BoxBottom,
  BoxBottomBrand,
  BoxBottomDescription,
  BoxBottomPrice,
  BoxBottomPriceText,
} from './styles';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

const Home: React.FC = () => {
  const [btnAddCart] = useState(new Animated.Value(1));
  const [opacitys] = useState(new Animated.Value(0));
  const [cartAntimationTop] = useState(new Animated.Value(0));
  const [cartAntimationTopSize] = useState(new Animated.Value(0.2));
  const [quantityFloating, setQuantityFloating] = useState(0);
  const { addToCart, products: productCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    async function requestProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    requestProducts();
  }, []);

  function handleAddCartProduct(item: Product): void {
    if (quantityFloating === 0) {
      const id = Number(item.id);
      setQuantityFloating(id);
      addToCart(item);
      Animated.sequence([
        Animated.timing(btnAddCart, {
          toValue: 1.5,
          duration: 700,
          useNativeDriver: false,
        }),
        Animated.timing(btnAddCart, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacitys, {
          toValue: 3,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(cartAntimationTop, {
          toValue: -60,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(cartAntimationTopSize, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(opacitys, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start(() => {
        btnAddCart.setValue(1);
        cartAntimationTop.setValue(0);
        cartAntimationTopSize.setValue(0.2);
        setQuantityFloating(0);
      });
    }
  }

  return (
    <Container>
      <ContainerProducts>
        <FlatGrid
          spacing={15}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const cart = productCart.find(pro => pro.id === item.id);

            return (
              <BoxProduct>
                <Image source={{ uri: item.image }} />
                <BoxBottom>
                  <BoxBottomBrand>Nike</BoxBottomBrand>
                  <BoxBottomDescription>
                    {item.description}
                  </BoxBottomDescription>
                  <BoxBottomPrice>
                    <BoxBottomPriceText>R$ 110,00</BoxBottomPriceText>
                    <TouchableOpacity
                      activeOpacity={0.2}
                      onPress={() => handleAddCartProduct(item)}
                    >
                      {quantityFloating === Number(item.id) && (
                        <Animated.View
                          style={{
                            position: 'absolute',
                            backgroundColor: '#f98888',
                            width: 40,
                            height: 40,
                            left: -4.8,
                            top: -10,
                            opacity: opacitys,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 30,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            transform: [
                              { scale: cartAntimationTopSize },
                              { translateY: cartAntimationTop },
                            ],
                          }}
                        >
                          <QuantityAddText style={{ color: '#fff' }}>
                            {cart?.quantity}
                          </QuantityAddText>
                        </Animated.View>
                      )}
                      <Animated.View
                        style={{
                          transform: [
                            {
                              scale:
                                quantityFloating === Number(item.id)
                                  ? btnAddCart
                                  : 1,
                            },
                          ],
                        }}
                      >
                        <Icon name="shopping-bag" size={30} color="#ff2929" />
                      </Animated.View>
                    </TouchableOpacity>
                  </BoxBottomPrice>
                </BoxBottom>
              </BoxProduct>
            );
          }}
        />
      </ContainerProducts>
    </Container>
  );
};

export default Home;

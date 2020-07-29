import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useCart } from '../../hooks/cart';
import * as navigation from '../../hooks/navigators';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { products } = useCart();
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
    >
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{
          height: 80,
        }}
        renderItem={({ item }: { item: Product }) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Cart;

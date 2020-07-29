import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Icon name="menu" size={30} color="#000" />
      <Icon name="search" size={30} color="#000" />
    </Container>
  );
};

export default Home;

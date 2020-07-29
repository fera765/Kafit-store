import 'react-native-gesture-handler';
import React from 'react';

import Header from './components/Header';
import Routes from './routes';
import Container from './hooks';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  );
};

export default App;

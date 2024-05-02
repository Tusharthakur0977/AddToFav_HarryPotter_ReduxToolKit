import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routing from './routing/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Routing Home={undefined} Favourites={undefined} />
    </NavigationContainer>
  );
};

export default App;

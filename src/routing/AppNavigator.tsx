import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favourites from '../screen/favourites/Favourites';
import HomePage from '../screen/home/HomePage/HomePage';
import {RootStackParamList} from './typings';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routing;

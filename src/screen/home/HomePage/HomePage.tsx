/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import Header from '../../../component/homePage/Header';
import NameList from '../../../component/homePage/NameList';

const HomePage = () => {
  return (
    <View style={{backgroundColor: '#212121'}}>
      <Header />
      <NameList
        userList={{
          id: '',
          name: '',
          gender: '',
          image: '',
          house: '',
        }}
      />
    </View>
  );
};

export default HomePage;

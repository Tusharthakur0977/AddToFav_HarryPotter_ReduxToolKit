/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';
import NameList from '../../../component/homePage/NameList';
import {GlobalInfoContext} from '../../../context/ColorContext';

const HomePage = () => {
  const [color, setColor] = useState('#212121');
  return (
    <GlobalInfoContext.Provider
      value={{appColor: color, setAppColor: setColor}}>
      <View style={{backgroundColor: color, flex: 1}}>
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
    </GlobalInfoContext.Provider>
  );
};

export default HomePage;

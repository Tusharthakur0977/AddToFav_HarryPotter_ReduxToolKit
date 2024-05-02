/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routing/typings';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const Header = () => {
  const favItems = useSelector((state: RootState) => state.fav);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const color = () => {
    return favItems.length > 0 ? '#FF6666' : 'grey';
  };
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 200,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '900',
          fontFamily: 'cursive',
          color: 'black',
        }}>
        Name Lists
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favourites');
          }}>
          <Icons style={{color: color()}} name="heart" size={20} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            bottom: 10,
            fontWeight: 'bold',
            right: 5,
            fontFamily: 'cursive',
          }}>
          {favItems.length}
        </Text>
      </View>
    </View>
  );
};

export default Header;

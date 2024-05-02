/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Favourites.Styles';
import Icons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routing/typings';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromFav} from '../../redux/slices/FavSlice';
import Snackbar from 'react-native-snackbar';
import {RootState} from '../../redux/store';

const Favourites = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const favItems = useSelector((state: RootState) => state.fav);
  const dispatch = useDispatch();

  const handleRemoveToFav = (id: string) => {
    dispatch(removeFromFav(id));
    Snackbar.show({
      text: 'Item Removed',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Icons
          name="arrowleft"
          size={30}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Favourites</Text>
      </View>
      {favItems.length ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            borderWidth: 0,
            borderColor: 'white',
            width: '100%',
            gap: 10,
          }}>
          {favItems.map(item => (
            <View style={styles.infoContainer}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View key={item.id} style={styles.detailContainer}>
                <Text style={styles.text}>NAME: {item.name}</Text>
                <Text style={styles.text}>Gender: {item.gender}</Text>
                <Text style={styles.text}>House: {item.house}</Text>
              </View>
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <Icons
                  style={{color: 'white'}}
                  name="heart"
                  size={20}
                  onPress={() => handleRemoveToFav(item.id)}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={{fontSize: 50, fontFamily: 'cursive'}}>
            No Data Found
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favourites;

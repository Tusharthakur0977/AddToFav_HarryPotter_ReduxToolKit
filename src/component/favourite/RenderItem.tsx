/* eslint-disable react-native/no-inline-styles */
import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image} from 'react-native';
import {styles} from '../../screen/favourites/Favourites.Styles';
import {removeFromFav} from '../../redux/slices/FavSlice';
import Snackbar from 'react-native-snackbar';
import Icons from 'react-native-vector-icons/AntDesign';
import {RootState} from '../../redux/store';

const RenderItem = () => {
  const favItems = useSelector((state: RootState) => state.fav);
  const dispatch = useDispatch();

  const handleRemoveToFav = (id: string) => {
    dispatch(removeFromFav(id));
    Snackbar.show({
      text: 'Item Deleted',
    });
  };

  return (
    <View>
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
        <View>
          <Text>No Data Found</Text>
        </View>
      )}
    </View>
  );
};
export default RenderItem;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {fetchData} from "../api's/MyApi";
import {UserDataType} from '../../types/UserData.Types';
import Icons from 'react-native-vector-icons/AntDesign';
import {addToFav} from '../../redux/slices/FavSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import Snackbar from 'react-native-snackbar';
import Header from './Header';
import {GlobalInfoContext} from '../../context/ColorContext';

export type UserDataProps = {
  userList: UserDataType;
};
const NameList: React.FC<UserDataProps> = ({}) => {
  const {appColor, setAppColor} = useContext(GlobalInfoContext);
  const [data, setData] = useState<UserDataType[]>([]);

  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.fav);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fetchData();
      setData(userData);
    };
    fetchUser();
  }, []);

  // const handelColor = () => {
  //   setAppColor('red');
  // };

  const handleAddToFav = (item: UserDataType) => {
    const isAlreadyAdded = favItems.some(favItem => favItem.id === item.id);
    if (!isAlreadyAdded) {
      dispatch(addToFav(item));
      Snackbar.show({
        text: 'Added to favorites',
        textColor: '#fff',
      });
    } else {
      Snackbar.show({
        text: 'Item Already Added',
        textColor: 'red',
      });
    }
  };
  const renderItem = ({item}: {item: UserDataType}) => {
    const isFavorite = favItems.some(favItem => favItem.id === item.id);
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>House: {item.house}</Text>
        <Text style={styles.text}>Gender: {item.gender.toUpperCase()}</Text>
        <TouchableOpacity onPress={() => handleAddToFav(item)}>
          <Icons
            style={styles.icon}
            name="heart"
            size={20}
            color={isFavorite ? '#FF6666' : 'gray'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyComponent = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
      }}>
      <Text style={{color: 'red', fontSize: 30}}>No Data Found</Text>
      <ActivityIndicator size={30} />
    </View>
  );

  return (
    <View style={{paddingBottom: 20, backgroundColor: appColor}}>
      <Header />
      {/* <Button title="Color" onPress={handelColor} /> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={{paddingBottom: 50}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NameList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    maxWidth: '50%',
    height: 200,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      height: 2,
      width: 4,
    },
    shadowColor: '#fff',
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  icon: {
    marginVertical: 10,
  },
});

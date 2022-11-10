/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, Text,View } from 'react-native';
import React from 'react';
import { primaryColor } from '../config/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar() {
  const navigation = useNavigation();
  return (
    <View style={{padding:'2%',paddingTop:'1%',paddingLeft:'3%',paddingRight:'3%',elevation:8,flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'100%',backgroundColor:primaryColor}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')} style={{flex:1,backgroundColor:'#fff',flexDirection:'row',alignItems:'center',justifyContent:'center',padding:'2%',borderRadius:8}}>
            <Ionicons name="search" color={'#6D6D6D'} size={22} style={{marginLeft:'2%'}} />
            <Text style={{fontFamily:'Montserrat-Medium',width:'90%',marginLeft:'2%',fontSize:12,color:'#6D6D6D'}}>Search over 10000+ products..</Text>
        </TouchableOpacity>
    </View>
  );
}

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import React from 'react';
import {fixedCategories} from '../utils/data';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const navigation = useNavigation();
  const _renderItem = ({item})=>(
      <TouchableOpacity onPress={()=>navigation.navigate('ProductByCategoryScreen',{type:item.title})} style={{width:'33.33%',marginBottom:'6%',marginTop:'2%',justifyContent:'center',alignItems:'center'}}>
          <Image source={item.image} resizeMode="contain" style={{width:50,height:50}} />
          <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,marginTop:'12%'}}>{item.title}</Text>
      </TouchableOpacity>
  );
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar  barStyle="dark-content" />
      <View style={{flex:1,backgroundColor:'#fff',paddingVertical:'2%'}}>
          <FlatList
              data={fixedCategories}
              renderItem={_renderItem}
              numColumns={3}
              keyExtractor={(item)=>item.id}
          />
      </View>
    </View>
  );
}

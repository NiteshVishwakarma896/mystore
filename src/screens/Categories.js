/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import {fixedCategories} from '../utils/data';

export default function Categories() {
  const _renderItem = ({item})=>(
      <TouchableOpacity style={{width:'33.33%',marginBottom:'6%',marginTop:'2%',justifyContent:'center',alignItems:'center'}}>
          <Image source={item.image} resizeMode="contain" style={{width:50,height:50}} />
          <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,marginTop:'12%'}}>{item.title}</Text>
      </TouchableOpacity>
  );
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
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

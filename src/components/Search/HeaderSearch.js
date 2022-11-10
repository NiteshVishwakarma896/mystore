/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, TextInput } from 'react-native';
import React from 'react';
import { primaryColor } from '../../config/Theme';

export default function HeaderSearch() {
  return (
    <View style={{backgroundColor:primaryColor,height:75,padding:'4%'}}>
        <View style={{flex:1,backgroundColor:'#fff',flexDirection:'row',alignItems:'center',justifyContent:'center',padding:'2%',height:65,borderRadius:8}}>
            <TextInput placeholder="Search over 10000+ products.." style={{fontFamily:'Montserrat-Medium',width:'95%',height:65,fontSize:14,color:'#6D6D6D'}} placeholderTextColor="#6D6D6D" />
        </View>
    </View>
  );
}

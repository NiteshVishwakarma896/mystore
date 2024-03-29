/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function IntenalHeader(props) {
  const navigation = useNavigation();
  return (
    <View style={{width:'95%',marginTop:'4%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:'auto',marginRight:'auto'}}>
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,color:'#000'}}>{props.title} Products</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductListScreen',{type:props.title})}>
            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:14,color:'green'}}>View All</Text>
        </TouchableOpacity>
    </View>
  );
}

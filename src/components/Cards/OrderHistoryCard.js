/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OrderHistoryCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{}} style={{width:'100%',marginVertical:'2%',borderWidth:0.5,borderColor:'#ccc',padding:'2%',borderRadius:4}}>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
            <Image source={props.imgUrl} resizeMode="contain" style={{width:90,height:90,borderRadius:4}} />
            <View style={{flex:1,marginLeft:'3%'}}>
                <Text numberOfLines={2} style={{fontFamily:'Montserrat-Bold',fontSize:16,color:'#000'}}>{props.title}</Text>
                <View style={{borderWidth:0.5, borderColor:'#D3D3D3',marginVertical:'2.5%'}} />
                <View style={{flexDirection:'row',alignItems:'baseline',justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:13,color:'green'}}>Delivered on 21-08-2022</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  );
}

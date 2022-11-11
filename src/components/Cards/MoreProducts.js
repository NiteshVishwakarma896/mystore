/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function MoreProducts(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')} style={{width:170}}>
        <View style={{backgroundColor:'#006E7F',width:'100%',padding:'2%',zIndex:1,borderTopLeftRadius:4,borderTopRightRadius:4}}>
            <Text style={{fontFamily:'Montserrat-Medium',color:'#fff',textAlign:'center',fontSize:10}}>{props.trendingSlogan}</Text>
        </View>
        <Image source={props.imgUrl} resizeMode="contain" style={{width:'100%',height:150,borderBottomLeftRadius:4,borderBottomRightRadius:4}} />
        <Text numberOfLines={2} style={{fontFamily:'Montserrat-Bold',marginTop:'4%',fontSize:14,color:'#000'}}>{props.title}</Text>
        <View style={{flexDirection:'row',marginTop:'6%',alignItems:'baseline',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:16,color:'green'}}>₹ {props.totalAmt}/-</Text>
            <Text style={{color:'#999999',fontSize:14,fontFamily:'Montserrat-Medium',textDecorationLine:'line-through'}}>₹ {props.oldAmt}/-</Text>
        </View>
    </TouchableOpacity>
  );
}

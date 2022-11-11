/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function WishlistCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')} style={{width:'100%',marginVertical:'2%',borderWidth:0.5,borderBottomWidth:1,borderBottomColor:'#006E7F',borderColor:'#ccc',padding:'2%',borderRadius:4}}>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
            <Image source={props.imgUrl} resizeMode="contain" style={{width:90,height:90,borderRadius:4}} />
            <View style={{flex:1,marginLeft:'3%'}}>
                <Text numberOfLines={1} style={{fontFamily:'Montserrat-Bold',fontSize:14,color:'#000'}}>{props.title}</Text>
                <Text numberOfLines={2} style={{fontFamily:'Montserrat-Regular',fontSize:12,marginTop:'2%',color:'#0e0e0e'}}>{props.description}</Text>
                <View style={{flexDirection:'row',marginTop:'2%',alignItems:'baseline',justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:16,color:'green'}}>₹ {props.totalAmt}/-</Text>
                    <TouchableOpacity style={{backgroundColor:'#BE0000',padding:'2%',borderRadius:4}}>
                        <Ionicons name="trash-bin-outline" color={'#fff'} size={18} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  );
}

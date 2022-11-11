/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FullSizeCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')} style={{width:'98%', margin:4, marginBottom:'8%',borderWidth:0.5,borderColor:"#ccc"}}>
        <View style={{backgroundColor:'#006E7F',width:'100%',padding:'1.7%',zIndex:1,borderTopLeftRadius:4,borderTopRightRadius:4}}>
            <Text style={{fontFamily:'Montserrat-Medium',color:'#fff',textAlign:'left',fontSize:10}}>{props.trendingSlogan}</Text>
        </View>
        <Image source={props.imgUrl} resizeMode="contain" style={{width:'100%',height:200,borderBottomLeftRadius:4,borderBottomRightRadius:4}} />
        <View style={{padding:'2%'}}>
            <Text numberOfLines={2} style={{fontFamily:'Montserrat-Bold',marginTop:'4%',fontSize:14,color:'#000'}}>{props.title}</Text>
            <Text numberOfLines={3} style={{fontFamily:'Montserrat-Regular',fontSize:12,marginVertical:'4%',color:'#000'}}>
                {props.description}
            </Text>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                    <Ionicons name="star" size={18} color="#FF8B00" />
                    <Ionicons name="star" size={18} color="#FF8B00" />
                    <Ionicons name="star" size={18} color="#FF8B00" />
                    <Ionicons name="star-half" size={18} color="#FF8B00" />
                    <Ionicons name="star-outline" size={18} color="#FF8B00" />
                </View>
                <Text style={{fontFamily:'Montserrat-Medium',color:'#525252',fontSize:13,paddingTop:'2%',marginLeft:'6%'}}>30265 Reviews{' '}<FontAwesome name="angle-right" size={14} color="#525252" /></Text>
            </View>
            <View style={{flexDirection:'row',marginVertical:'4%',alignItems:'baseline',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:16,color:'green'}}>₹ {props.totalAmt}/-</Text>
                <Text style={{color:'#999999',fontSize:14,fontFamily:'Montserrat-Medium',textDecorationLine:'line-through'}}>₹ {props.oldAmt}/-</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

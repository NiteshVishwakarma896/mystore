/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function CartCard(props) {
  return (
    <View style={{paddingBottom:'4%',width:'94%',marginLeft:'auto',marginRight:'auto',marginTop:'4%'}}>
        <View style={{ marginVertical:'4%',paddingBottom:'2%',flexDirection:'row',alignItems:'center',justifyContent:'space-between' }}>
        <Image source={props.imgUrl} resizeMode="contain" style={{width:75,height:75,borderRadius:6}} />
        {/*  */}
        <View style={{flex:1,marginLeft:'4%'}}>
            <Text style={{fontFamily:'Montserrat-SemiBold'}}>{props.title}</Text>
            <Text numberOfLines={3} style={{fontFamily:'Montserrat-Regular',fontSize:12}}>{props.description}</Text>
        </View>
        </View>
        {/*  */}
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{fontFamily:'Montserrat-Bold',color:'green',marginTop:'4%',fontSize:18}}>₹ {props.totalAmt}/-</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'25%'}}>
            <TouchableOpacity style={{padding:'2%',width:30,height:30,backgroundColor:'#EFF8FF',borderWidth:1,borderColor:'#65B7FF',justifyContent:'center',alignItems:'center',borderRadius:8}}>
            <Text style={{fontFamily:'Montserrat-Bold',fontSize:22,textAlign:'center',textAlignVertical:'center'}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>{props.itemCount}</Text>
            <TouchableOpacity style={{padding:'2%',width:30,height:30,backgroundColor:'#EFF8FF',borderWidth:1,borderColor:'#65B7FF',justifyContent:'center',alignItems:'center',borderRadius:8}}>
            <Text style={{fontFamily:'Montserrat-Bold',fontSize:22}}>-</Text>
            </TouchableOpacity>
        </View>
        </View>
        {/*  */}
        <View style={{width:'100%',padding:'2%',backgroundColor:'#0474D8',marginTop:'4%'}}>
            <Text style={{fontFamily:'Montserrat-Medium',color:'#fff',fontSize:14}}>₹ 45/ will be charged at the time of delivery</Text>
        </View>
        {/*  */}
        <TouchableOpacity style={{position: 'absolute',right:4,top:'-4%'}}>
            <FontAwesome name="trash" size={24} color="red" />
        </TouchableOpacity>
    </View>
  );
}

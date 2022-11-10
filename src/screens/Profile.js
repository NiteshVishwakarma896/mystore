/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { primaryColor } from './../config/Theme';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    return (
      <ScrollView style={{flex:1}}>
        <View style={{width:'100%',flexDirection:'row',padding:'4%',alignItems:'center',justifyContent:'space-between',backgroundColor:primaryColor}}>
            <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' }} style={{width:100,height:100,borderRadius:50}} />
            <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',width:'60%'}}>
              <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,color:'#000'}}>Nitesh Vishwakarma</Text>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000',marginTop:'3%'}}>+91-8962551464</Text>
            </View>
            <TouchableOpacity>
              <Feather name="edit" color={'#000'} size={20} />
            </TouchableOpacity>
        </View>
        <View style={{width:'100%',backgroundColor:'#fff',flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:'4%'}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name="package" color={'#000'} size={20} />
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000',marginLeft:'6%'}}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name="heart" color={'#000'} size={20} />
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000',marginLeft:'6%'}}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
              <Feather name="gift" color={'#000'} size={20} />
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000',marginLeft:'6%'}}>Deals</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:'100%',marginTop:'2%'}}>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="package" color={'#000'} size={18} />{'   '}Order History</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="heart" color={'#000'} size={18} />{'   '}My Wishlist</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Ionicons name="card-outline" color={'#000'} size={18} />{'   '}My Transactions</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><FontAwesome name="address-card-o" color={'#000'} size={18} />{'   '}Delivery Address</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="bell" color={'#000'} size={18} />{'   '}Notifications</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('PolicyScreen',{type:'Privacy Policy'}); }} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="lock" color={'#000'} size={18} />{'   '}Privacy Policy</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('PolicyScreen',{type:'Refund Policy'}); }}  style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><MaterialCommunityIcons name="file-question-outline" color={'#000'} size={18} />{'   '}Return/Refund Policy</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('PolicyScreen',{type:'Terms & Conditions'}); }}  style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><MaterialCommunityIcons name="file-eye-outline" color={'#000'} size={18} />{'   '}Terms & Conditions</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ navigation.navigate('PolicyScreen',{type:'Help & Support'}); }}  style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="help-circle" color={'#000'} size={18} />{'   '}Helps</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="package" color={'#000'} size={18} />{'   '}Contact Us</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%',backgroundColor:'#fff'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}><Feather name="log-out" color={'#000'} size={18} />{'   '}Log Out</Text>
              <FontAwesome name="angle-right" size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%',paddingHorizontal:'4%'}}>
              <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,color:'#000'}}>Version 1.0.0</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
}

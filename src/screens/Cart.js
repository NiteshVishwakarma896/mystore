/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import CartCard from '../components/Cart/CartCard'
import { cartItems } from '../utils/data';

export default function Cart() {
    const _renderItem = ({item})=>(
        <CartCard title={item.title} description={item.description} totalAmt={item.totalAmt} imgUrl={item.imgUrl} itemCount={item.itemCount} />
    )
    return (
      // <View style={{flex:1,backgroundColor:"#fff"}}>
      //   <FlatList
      //     data={cartItems}
      //     renderItem={_renderItem}
      //     keyExtractor={(item)=>item.id}
      //   />
      // </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
        <Image source={require('../assets/empty-shopping-bag.gif')} resizeMode="contain" style={{width:'100%',height:200}} />
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:20,marginTop:'4%'}}>Empty Cart</Text>
        <Text style={{fontFamily:'Montserrat-Regular',textAlign:'center',lineHeight:24,fontSize:16,marginTop:'4%'}}>Looks like you don't have anything in cart, add some products so that i can feel good</Text>
      </View>
    );
}

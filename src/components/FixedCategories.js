/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import React from 'react';
import { fixedCategories } from '../utils/data';

export default function FixedCategories() {
    //
    const _renderItem = ({item})=>(
        <TouchableOpacity style={{width:80,justifyContent:'center',alignItems:'center'}}>
            <Image source={item.image} resizeMode="contain" style={{width:35,height:35}} />
            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,marginTop:'12%',color:'#000'}}>{item.title}</Text>
        </TouchableOpacity>
    );
    //
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{flex:1,backgroundColor:'#FFFCF2',paddingVertical:'4%',paddingHorizontal:'2%'}}>
                <FlatList
                    data={fixedCategories}
                    renderItem={_renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </View>
    );
}

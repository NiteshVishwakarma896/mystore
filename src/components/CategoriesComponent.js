/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import React from 'react';
import { fixedCategories } from '../utils/data';
import { useNavigation } from '@react-navigation/native';

export default function CategoriesComponent() {
    const navigation = useNavigation();
    //
    const _renderItem = ({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('ProductByCategoryScreen',{type:item.title})} style={{width:100,marginBottom:'6%',marginTop:'2%',justifyContent:'center',alignItems:'center'}}>
            <Image source={item.image} resizeMode="contain" style={{width:35,height:35}} />
            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,marginTop:'12%',color:'#000'}}>{item.title}</Text>
        </TouchableOpacity>
    );
    //
    return (
        <View style={{flex:1,backgroundColor:'#fff',marginTop:'4%'}}>
            <View style={{flex:1,backgroundColor:'#FFFCF2',paddingVertical:'2%',paddingHorizontal:'2%'}}>
                <FlatList
                    data={fixedCategories}
                    renderItem={_renderItem}
                    numColumns={4}
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </View>
    );
}

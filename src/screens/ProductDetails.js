/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import {View, Text, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import React,{ useEffect, useState } from 'react';
import Carousel from 'react-native-banner-carousel';
import { useNavigation } from '@react-navigation/native';
import ViewMoreText from 'react-native-view-more-text';
import { singleProductDetails } from '../utils/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';

export default function ProductDetails() {
    const navigation = useNavigation();
    const [selectedSize,setSelectedSize] = useState(null);
    const [selectedColor,setSelectedColor] = useState(null);
    const renderViewMore = (onPress)=>{
        return (
          <Text style={{fontFamily:'Montserrat-Bold',color:'#03797A'}} onPress={onPress}>View more</Text>
        );
    };
    const renderViewLess = (onPress)=>{
        return (
          <Text style={{fontFamily:'Montserrat-Bold',color:'#03797A'}} onPress={onPress}>View less</Text>
        );
    };
    const bannersData = [
        {
            id:1,
            img:require('../assets/details01.jpg'),
        },
        {
            id:2,
            img:require('../assets/details02.jpg'),
        },
        {
            id:3,
            img:require('../assets/details03.jpg'),
        },
    ];
    //
    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                    <TouchableOpacity style={{paddingRight:22}}>
                        <Ionicons name='share-social-outline' size={28} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingRight:24}}>
                        <Ionicons name='heart-outline' size={28} color='#000' />
                    </TouchableOpacity>
                </View>
            ),
        });
    },[]);
    //
    const _renderItem = (item,index)=>(
        <Image key={index} source={item.img} resizeMode="contain" style={{width:'100%',height:350}} />
    );
    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
            {/* Banners */}
            <View style={{flex:1,width:'100%',backgroundColor:'#fff',paddingTop:'4%'}}>
                <Carousel
                    autoplay={true}
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={Dimensions.get('screen').width}
                >
                {
                    bannersData.map((item, index) => _renderItem(item, index))
                }
                </Carousel>
            </View>
            {
                (singleProductDetails && singleProductDetails.trendingSlogan) ? (
                    <View style={{backgroundColor:'#006E7F',width:'100%',padding:'1.5%',zIndex:1,borderTopLeftRadius:4,borderTopRightRadius:4}}>
                        <Text numberOfLines={1} style={{fontFamily:'Montserrat-Medium',color:'#fff',textAlign:'left',fontSize:12}}>{singleProductDetails.trendingSlogan}</Text>
                    </View>
                ) : null
            }
            {/* Other Details */}
            <View style={{flex:1,padding:'4%',backgroundColor:'#fff'}}>
                <Text style={{fontFamily:'Montserrat-Bold',color:'#000',fontSize:20,marginBottom:'4%'}}>{singleProductDetails.title}</Text>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'4%'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginBottom:'4%'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',color:'#000',fontSize:16}}><Ionicons name='star' size={18} color='#FF8B00' />{' '}4.3</Text>
                        <Text style={{fontFamily:'Montserrat-Medium',color:'#525252',fontSize:13,paddingTop:'2%',marginLeft:'6%'}}>30265 Reviews{' '}<FontAwesome name='angle-right' size={14} color='#525252' /></Text>
                    </View>
                    <Text style={{fontFamily:'Montserrat-Bold',color:'green',fontSize:14}}><MaterialCommunityIcons name='package-variant-closed' size={18}  />{' '}In Stock</Text>
                </View>
                {/* Sizes and Price */}
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'3.5%'}}>
                    <View style={{backgroundColor:'#DE1515',paddingVertical:'2%',paddingHorizontal:'4%',borderRadius:4}}>
                        <Text numberOfLines={1} style={{fontFamily:'Montserrat-SemiBold',color:'#fff',fontSize:12}}>Save 25% on FIRSTORDER</Text>
                    </View>
                    {/* Price */}
                    <Text style={{fontFamily:'Montserrat-Bold',color:'#03797A',fontSize:24}}>₹ 450/-</Text>
                </View>
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                    textStyle={{textAlign: 'justify'}}
                >
                <Text style={{fontFamily:'Montserrat-Regular',fontSize:14,color:'#1C1C1C',textAlign:'justify'}}>{singleProductDetails.description}</Text>
                </ViewMoreText>
                {/* Render HTML TEXT HERE IN LATER */}
            </View>
            {/* Buying */}
            <View style={{flex:1,padding:'4%',backgroundColor:'#fff',marginTop:'1%'}}>
                <View style={{width:"100%",borderWidth:1,borderRadius:4}}>
                    <Picker
                        style={{ fontFamily:'Montserrat-Bold' }}
                        selectedValue={selectedSize}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSize(itemValue)
                        }
                    >
                        <Picker.Item label="Small" value="S" />
                        <Picker.Item label="Medium" value="M" />
                        <Picker.Item label="Large" value="L" />
                        <Picker.Item label="Extra Large" value="XL" />
                        <Picker.Item label="2XL" value="2XL" />
                    </Picker>
                </View>
                <View style={{width:"100%",borderWidth:1,borderRadius:4,marginTop:'4%'}}>
                    <Picker
                        style={{ fontFamily:'Montserrat-Bold' }}
                        selectedValue={selectedSize}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSize(itemValue)
                        }
                    >
                        <Picker.Item label="Black" value="Black" />
                        <Picker.Item label="Brown" value="Brown" />
                        <Picker.Item label="Blue" value="Blue" />
                    </Picker>
                </View>
            </View>
        </ScrollView>
    );
}

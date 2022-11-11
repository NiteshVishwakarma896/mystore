/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import {View, Text, ScrollView, Dimensions, Image, TouchableOpacity, StatusBar, TextInput, FlatList} from 'react-native';
import React,{ useEffect, useState, useRef } from 'react';
import Carousel from 'react-native-banner-carousel';
import { useNavigation } from '@react-navigation/native';
import ViewMoreText from 'react-native-view-more-text';
import { singleProductDetails } from '../utils/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { SimpleStepper } from 'react-native-simple-stepper';
import { primaryColor } from './../config/Theme';
import { trendingProduct } from '../utils/data';
import Review from '../components/Users/Review';
import { AirbnbRating } from 'react-native-ratings';
import MoreProducts from '../components/Cards/MoreProducts';

export default function ProductDetails() {
    const navigation = useNavigation();
    const bottomSheetSizeRef = useRef(null);
    const bottomSheetColorRef = useRef(null);
    const bottomSheetReviewsRef = useRef(null);
    const [quantity,setQuantity] = useState(1);
    const [selectedSize,setSelectedSize] = useState("S");
    const [selectedColor,setSelectedColor] = useState("green");
    const renderViewMore = (onPress)=>{
        return (
          <Text style={{fontFamily:'Montserrat-Bold',color:'#03797A'}} onPress={onPress}>Read more</Text>
        );
    };
    const renderViewLess = (onPress)=>{
        return (
          <Text style={{fontFamily:'Montserrat-Bold',color:'#03797A'}} onPress={onPress}>Read less</Text>
        );
    };
    const _renderItemProducts = ({item})=>(
        <MoreProducts title={item.title} trendingSlogan={item.trendingSlogan} imgUrl={item.imgUrl} totalAmt={item.totalAmt} oldAmt={item.totalAmt} />
    );
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
        <>
        <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
            {/* Banners */}
            <StatusBar  barStyle="dark-content" />
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
                <Text numberOfLines={3} style={{fontFamily:'Montserrat-Medium',fontSize:13,textAlign:'justify'}}>{singleProductDetails.description}</Text>
            </View>
            {/* Buying */}
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:'4%',paddingVertical:'1%',backgroundColor:'#fff',marginTop:'1%'}}>
                <TouchableOpacity onPress={()=>{ bottomSheetSizeRef.current.show(); }} style={{width:'45%',backgroundColor:'#fff',borderColor:'#C4C4C4',borderWidth:0.5,borderRadius:50,paddingHorizontal:'4%',paddingVertical:'3%',elevation:2}}>
                    <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Montserrat-Bold',color:'#3F3F3F',marginBottom:'2%'}}>Size</Text>
                        <Text style={{fontFamily:'Montserrat-ExtraBold',color:'#000',marginBottom:'2%'}}>{selectedSize}</Text>
                    </View>
                </TouchableOpacity>
                {/*  */}
                <TouchableOpacity onPress={()=>{ bottomSheetColorRef.current.show(); }} style={{width:'45%',backgroundColor:'#fff',borderColor:'#C4C4C4',borderWidth:0.5,borderRadius:50,paddingHorizontal:'4%',paddingVertical:'3%',elevation:2}}>
                    <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'Montserrat-Bold',color:'#3F3F3F',marginBottom:'2%'}}>Color</Text>
                        <View style={{width:15,height:15,borderRadius:50,backgroundColor:selectedColor}}/>
                    </View>
                </TouchableOpacity>
            </View>
            {/* Add to cart */}
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:'4%',paddingVertical:'1%',backgroundColor:'#fff',marginTop:'4%'}}>
                    <SimpleStepper 
                        containerStyle={{ backgroundColor: '#fff', marginLeft:'4%', flexDirection: 'row', borderWidth: 0.5, borderColor:'#C4C4C4', borderRadius: 4, overflow: 'hidden', alignItems: 'center', elevation:2 }} 
                        showText
                        initialValue={quantity}
                        minimumValue={1}
                        valueChanged={value => setQuantity(value)}
                        textStyle={{ padding: 8, fontSize: 16, color: '#000', fontFamily:'Montserrat-Bold' }}
                        incrementImageStyle={{ height: 20, width: 20 }}
                        decrementImageStyle={{ height: 20, width: 20 }}
                    />
                    <TouchableOpacity style={{flex:1,backgroundColor:primaryColor,padding:'3.5%',marginLeft:'4%',borderRadius:4,elevation:4}}>
                        <Text style={{fontFamily:'Montserrat-Bold',color:'#000',textAlign:'center'}}>Add to Cart</Text>
                    </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:'4%',paddingVertical:'1%',backgroundColor:'#fff',marginTop:'4%'}}>
                <TouchableOpacity style={{flex:1,backgroundColor:'#FFA200',padding:'3.5%',borderRadius:4,elevation:4}}>
                    <Text style={{fontFamily:'Montserrat-Bold',color:'#000',textAlign:'center'}}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            {/* Details */}
            <View style={{width:'100%',padding:'4%'}}>
                <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                        textStyle={{textAlign: 'justify'}}
                    >
                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:13,color:'#1C1C1C',textAlign:'justify'}}>{singleProductDetails.description}</Text>
                </ViewMoreText>
                {/* Render HTML TEXT HERE IN LATER */}
            </View>
            {/* Reviews */}
            <TouchableOpacity onPress={()=>{ bottomSheetReviewsRef.current.show(); }}  style={{width:'100%',padding:'4%',backgroundColor:'#FFFBF3',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',color:'#000',fontSize:16}}><Ionicons name='star' size={16} color='#FF8B00' />{' '}4.3</Text>
                    <Text style={{fontFamily:'Montserrat-Medium',color:'#525252',fontSize:16}}>30265 Reviews{' '}<FontAwesome name='angle-right' size={14} color='#525252' /></Text>
                </View>
            </TouchableOpacity>
            {/* Write Review */}
            <View style={{width:'100%',padding:'4%',marginTop:'3%'}}>
                <TextInput keyboardType='default' style={{ width:'100%',height:100,borderWidth:0.5,borderRadius:4,textAlign:'left',textAlignVertical:'top',fontFamily:'Montserrat-Medium'}} multiline={true}  placeholder='Write us a review....' />
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'1%',marginTop:'4%'}}>
                    <TouchableOpacity style={{width:'35%',backgroundColor:primaryColor,padding:'3%',borderRadius:4,elevation:1}}>
                        <Text style={{fontFamily:'Montserrat-SemiBold',color:'#000',textAlign:'center'}}>Submit</Text>
                    </TouchableOpacity>
                    <AirbnbRating size={18} showRating={false} />
                </View>
            </View>
            {/* More Products */}
            <View style={{width:'100%',padding:'4%',marginTop:'3%'}}>
                <Text style={{fontFamily:'Montserrat-SemiBold',color:'#0e0e0e'}}>More Similar Products</Text>
                <View style={{flex:1,marginVertical:'4%',width:'100%'}}>
                    <FlatList
                        data={trendingProduct}
                        horizontal={true}
                        contentContainerStyle={{ paddingRight:'20%' }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{width:'2%'}} />}
                        renderItem={_renderItemProducts}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </ScrollView>
        {/* Bottom Sheet Size */}
        <BottomSheet sheetBackgroundColor="#fff" hasDraggableIcon ref={bottomSheetSizeRef} height={400} radius={8}  >
            <View style={{flex:1,padding:'4%'}}>
                {/* Header */}
                <View style={{width:'100%',marginTop:'1%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:'auto',marginRight:'auto',marginBottom:'4%'}}>
                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:18,color:'#000'}}>Select Size</Text>
                </View>
                {/*  */}
                <TouchableOpacity onPress={()=>{setSelectedSize('S');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Small</Text>
                    {
                        (selectedSize === 'S') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelectedSize('M');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Medium</Text>
                    {
                        (selectedSize === 'M') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelectedSize('L');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Large</Text>
                    {
                        (selectedSize === 'L') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelectedSize('XL');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Extra Large</Text>
                    {
                        (selectedSize === 'XL') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
            </View>
        </BottomSheet>
        {/* Bottom Sheet Color */}
        <BottomSheet sheetBackgroundColor="#fff" hasDraggableIcon ref={bottomSheetColorRef} height={400} radius={8}  >
            <View style={{flex:1,padding:'4%'}}>
                {/* Header */}
                <View style={{width:'100%',marginTop:'1%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:'auto',marginRight:'auto',marginBottom:'4%'}}>
                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:18,color:'#000'}}>Select Color</Text>
                </View>
                {/*  */}
                <TouchableOpacity onPress={()=>{setSelectedColor('green');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Green</Text>
                    {
                        (selectedColor === 'green') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelectedColor('red');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Red</Text>
                    {
                        (selectedColor === 'red') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelectedColor('blue');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Blue</Text>
                    {
                        (selectedColor === 'blue') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setSelectedColor('black');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Black</Text>
                    {
                        (selectedColor === 'black') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                    }
                </TouchableOpacity>
            </View>
        </BottomSheet>
        {/* Bottom Sheet Review */}
        <BottomSheet sheetBackgroundColor="#fff" hasDraggableIcon ref={bottomSheetReviewsRef} height={800} radius={12}  >
            <View style={{flex:1,padding:'4%'}}>
                {/* Header */}
                <View style={{width:'100%',marginTop:'1%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:'auto',marginRight:'auto',marginBottom:'6%'}}>
                    <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:18,color:'#000'}}>Customer Reviews</Text>
                </View>
                {/*  */}
                <Review />
                <Review />
                <Review />
                <Review />
            </View>
        </BottomSheet>
        </>
    );
}

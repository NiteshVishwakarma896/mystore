/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { primaryColor } from '../config/Theme';
import HeaderSearch from '../components/Search/HeaderSearch';
import ProductCardSearch from '../components/Cards/ProductCardSearch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { trendingProduct } from '../utils/data';
import BottomSheet from 'react-native-gesture-bottom-sheet';

export default function Search() {
    const bottomSheetRef = useRef(null);
    const [sortType,setSortType] = useState(null);
    const _renderSearchItem = ({item})=>(
        <ProductCardSearch title={item.title} trendingSlogan={item.trendingSlogan} imgUrl={item.imgUrl} totalAmt={item.totalAmt} oldAmt={item.totalAmt} description={item.description} />
    );
    //
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar backgroundColor={primaryColor} barStyle={'dark-content'} />
            <HeaderSearch/>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>{ bottomSheetRef.current.show(); }} style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:0.5,padding:'3%',borderColor:'#BFBFBF',width:'50%'}}>
                    <FontAwesome5 color={'#303030'} name="sort-amount-down" size={18} />
                    <Text style={{fontFamily:'Montserrat-Medium',color:'#000',marginLeft:'6%'}}>Sort</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderWidth:0.5,padding:'3%',borderColor:'#BFBFBF',width:'50%'}}>
                    <Ionicons color={'#303030'} name="ios-funnel" size={20} />
                    <Text style={{fontFamily:'Montserrat-Medium',color:'#000',marginLeft:'6%'}}>Filter</Text>
                </TouchableOpacity>
            </View>
            {/*  */}
            <FlatList
                data={trendingProduct}
                renderItem={_renderSearchItem}
                numColumns={2}
                style={{padding:'2%',marginTop:'2%'}}
                keyExtractor={(item)=>item.id}
            />
            {/* Bottom Sheet Sort */}
            <BottomSheet sheetBackgroundColor="#fff" hasDraggableIcon ref={bottomSheetRef} height={400} radius={25}  >
                <View style={{flex:1,padding:'4%'}}>
                    {/* Header */}
                    <View style={{width:'100%',marginTop:'1%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:'auto',marginRight:'auto',marginBottom:'4%'}}>
                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18,color:'#000'}}>Sort</Text>
                        <TouchableOpacity>
                            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:14,color:'grey'}}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    {/*  */}
                    <TouchableOpacity onPress={()=>{setSortType('Top Rated');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Top Rated</Text>
                        {
                            (sortType === 'Top Rated') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSortType('Newest First');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Newest First</Text>
                        {
                            (sortType === 'Newest First') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSortType('Oldest First');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Oldest First</Text>
                        {
                            (sortType === 'Oldest First') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSortType('Price - Low to High');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Price - Low to High</Text>
                        {
                            (sortType === 'Price - Low to High') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSortType('Price - High to Low');}} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:'3%'}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#000'}}>Price - High to Low</Text>
                        {
                            (sortType === 'Price - High to Low') ? (<FontAwesome5 name="check-circle" size={19} color={'green'} />) : (<FontAwesome name="circle-o" size={20} color={'#000'} />)
                        }
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    );
}

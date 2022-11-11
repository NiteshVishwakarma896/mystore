/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, StatusBar, Image, FlatList, Dimensions,LogBox, ScrollView, RefreshControl } from 'react-native';
import React, {useEffect,useCallback,useState} from 'react';
import SearchBar from '../components/SearchBar';
import FixedCategories from '../components/FixedCategories';
import Carousel from 'react-native-banner-carousel';
import IntenalHeader from '../components/IntenalHeader';
import ProductCardVertical from '../components/Cards/ProductCardVertical';
import ProductCardGeneral from '../components/Cards/ProductCardGeneral';
import { trendingProduct } from '../utils/data';
import Divder from '../components/Divider/Divder';
import CategoriesComponent from '../components/CategoriesComponent';
import StaticIntenalHeader from './../components/StaticInternalHeader';
import FullSizeCard from '../components/Cards/FullSizeCard';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeScreen() {
    //
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
    const bannersData = [
        {
            id:1,
            img:require('../assets/banner02.jpg'),
        },
        {
            id:2,
            img:require('../assets/banner03.jpg'),
        },
        {
            id:3,
            img:require('../assets/banner01.jpg'),
        },
    ];
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, []);
    //
    const _renderItem = (item,index)=>(
        <Image key={index} source={item.img} resizeMode="cover" style={{width:'100%',height:260}} />
    );
    const _renderItemProduct = ({item})=>(
        <ProductCardVertical title={item.title} trendingSlogan={item.trendingSlogan} imgUrl={item.imgUrl} totalAmt={item.totalAmt} oldAmt={item.totalAmt} description={item.description} />
    );
    const _renderItemProducts = ({item})=>(
        <ProductCardGeneral title={item.title} trendingSlogan={item.trendingSlogan} imgUrl={item.imgUrl} totalAmt={item.totalAmt} oldAmt={item.totalAmt} description={item.description} />
    );
    const _renderItemFullSizeProducts = ({item})=>(
        <FullSizeCard title={item.title} trendingSlogan={item.trendingSlogan} imgUrl={item.imgUrl} totalAmt={item.totalAmt} oldAmt={item.totalAmt} description={item.description} />
    );
    //
    return (
        <ScrollView refreshControl={ <RefreshControl progressViewOffset={60} refreshing={refreshing} onRefresh={onRefresh} />} stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}  style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar  barStyle="dark-content" />
            {/* SearchBar */}
            <SearchBar />
            {/* Top Categories */}
            <FixedCategories />
            {/* Banners */}
            <View style={{flex:1,width:'100%',backgroundColor:'#fff'}}>
                <Carousel
                    autoplay={false}
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
            {/* Trending Products */}
            <IntenalHeader title="Trending" />
            <View style={{flex:1,padding:'2%',marginTop:'4%',width:'100%'}}>
                <FlatList
                    data={trendingProduct}
                    horizontal={true}
                    contentContainerStyle={{ paddingRight:'20%' }}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{width:'2%'}} />}
                    renderItem={_renderItemProduct}
                    keyExtractor={item => item.id}
                />
            </View>
            <Divder />
            {/* Recommended Products */}
            <IntenalHeader title="Recommended" />
            <View style={{flex:1,padding:'2%',marginTop:'4%',width:'100%'}}>
                <FlatList
                    data={trendingProduct}
                    horizontal={true}
                    contentContainerStyle={{ paddingRight:'20%' }}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{width:'2%'}} />}
                    renderItem={_renderItemProduct}
                    keyExtractor={item => item.id}
                />
            </View>
            <Divder />
            {/* Categories */}
            <StaticIntenalHeader title="Categories" />
            <CategoriesComponent />
            <View style={{flex:1,marginTop:'4%',width:'100%'}}>
                <FlatList
                    data={trendingProduct}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={{ paddingHorizontal:'2%' }}
                    renderItem={_renderItemProducts}
                    keyExtractor={item => item.id}
                />
            </View>
            <Divder />
            <View style={{flex:1,marginTop:'4%',width:'100%'}}>
                <FlatList
                    data={trendingProduct}
                    showsVerticalScrollIndicator={false}
                    style={{ paddingHorizontal:'2%' }}
                    renderItem={_renderItemFullSizeProducts}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    );
}

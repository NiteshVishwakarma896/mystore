/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, FlatList } from 'react-native';
import React from 'react';
import OrderHistoryCard from '../../components/Cards/OrderHistoryCard';
import { trendingProduct } from '../../utils/data';

export default function OrderHistory() {
  //
  const _renderItemHistoryCard = ({item})=>(
    <OrderHistoryCard title={item.title} trendingSlogan={item.trendingSlogan} imgUrl={item.imgUrl} totalAmt={item.totalAmt} oldAmt={item.totalAmt} description={item.description} />
  );
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <FlatList
          data={trendingProduct}
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal:'2%' }}
          renderItem={_renderItemHistoryCard}
          keyExtractor={item => item.id}
      />
    </View>
  );
}

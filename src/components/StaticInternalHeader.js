/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function StaticIntenalHeader(props) {
  return (
    <View style={{width:'95%',marginTop:'4%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:'auto',marginRight:'auto'}}>
        <Text style={{fontFamily:'Montserrat-Bold',fontSize:16,color:'#000'}}>{props.title}</Text>
        {/* <TouchableOpacity >
            <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:14,color:'green'}}>View All</Text>
        </TouchableOpacity> */}
    </View>
  );
}

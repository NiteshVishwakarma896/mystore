/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import React from 'react';
import ViewMoreText from 'react-native-view-more-text';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Review() {
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
    return (
        <View style={{width:'100%',borderWidth:0.5,borderRadius:8,padding:'4%',borderColor:'#CECECE',elevation:1,backgroundColor:'#fff',marginBottom:'4%'}}>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:'3%'}}>
                <View style={{width:'55%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                    <Image source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA0PzwLOOR4smmmfHG6N1jNwOVsrh2V4oSQ&usqp=CAU' }} style={{width:25,height:25,borderRadius:50}} />
                    <Text style={{fontFamily:'Montserrat-SemiBold',color:'#000',fontSize:13,marginLeft:'2%'}}>Abhijeet Singh</Text>
                </View>
                <Text style={{fontFamily:'Montserrat-SemiBold',color:'#000',fontSize:13}}><Ionicons name="star" size={16} color="#FF8B00" />{' '}4.3</Text>
            </View>
            <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}
                textStyle={{textAlign: 'left'}}
            >
                <Text style={{fontFamily:'Montserrat-Medium'}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, quas. Rerum quis nesciunt eveniet modi alias obcaecati, nisi dolorem vero vel cum molestiae id adipisci delectus nam a eos eligendi reiciendis quisquam necessitatibus quam consequatur blanditiis autem numquam et? Exercitationem fuga dolorum repellendus harum excepturi enim soluta ducimus! Earum, optio!
                </Text>
            </ViewMoreText>
        </View>
    );
}

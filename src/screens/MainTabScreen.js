/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryColor } from '../config/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import Categories from './Categories';
import Cart from './Cart';
import Profile from './Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import Search from './Search';
import ProductDetails from './ProductDetails';
import Policy from './Profile/Policy';
import Notifications from './Profile/Notifications';
import OrderHistory from './Profile/OrderHistory';
import Wishlist from './Profile/Wishlist';
import Address from './Profile/Address';
import Contact from './Profile/Contact';
import Deals from './Profile/Deals';
import ProductList from './Products/ProductList';
import ProductByCategory from './Products/ProductByCategory';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                return (
                    <View style={{borderTopColor:(focused) ? primaryColor : "#fff",borderTopWidth:3,width:"100%",height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <MaterialCommunityIcons  name={iconName} size={size} color={color} />
                        <Text style={{
                            fontSize:10,
                            color:color,
                            fontFamily:"Montserrat-Medium",
                        }}>{route.name}</Text>
                    </View>
                );
            } else if (route.name === 'Categories') {
                iconName = focused ? 'apps-outline' : 'apps-outline';
                return (
                    <View style={{borderTopColor:(focused) ? primaryColor : "#fff",borderTopWidth:3,width:"100%",height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name={iconName} size={size} color={color} />
                        <Text style={{
                            fontSize:10,
                            color:color,
                            fontFamily:"Montserrat-Medium",
                        }}>{route.name}</Text>
                    </View>
                );

            } else if (route.name === 'Search') {
                iconName = focused ? 'search' : 'search-outline';
                return (
                    <View style={{borderTopColor:(focused) ? primaryColor : "#fff",borderTopWidth:3,width:"100%",height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name={iconName} size={size} color={color} />
                        <Text style={{
                            fontSize:10,
                            color:color,
                            fontFamily:"Montserrat-Medium",
                        }}>{route.name}</Text>
                    </View>
                );

            } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
                return (
                    <View style={{borderTopColor:(focused) ? primaryColor : "#fff",borderTopWidth:3,width:"100%",height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name={iconName} size={size} color={color} />
                        <Text style={{
                            fontSize:10,
                            color:color,
                            fontFamily:"Montserrat-Medium",
                        }}>{route.name}</Text>
                    </View>
                );

            } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
                return (
                    <View style={{borderTopColor:(focused) ? primaryColor : "#fff",borderTopWidth:3,width:"100%",height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Ionicons  name={iconName} size={size} color={color} />
                        <Text style={{
                            fontSize:10,
                            color:color,
                            fontFamily:"Montserrat-Medium",
                        }}>{route.name}</Text>
                    </View>
                );
            }

            },
            tabBarShowLabel:false,
            tabBarActiveTintColor:primaryColor,
            tabBarStyle:{
                height:60,
                elevation:0,
                borderTopColor:"#fff",
            },

        })}
    >
      <Tab.Screen component={HomeStackScreen} name='Home' options={{ headerShown:false }} />
      <Tab.Screen component={CategoriesStackScreen} name='Categories' options={{ headerShown:false }} />
      <Tab.Screen component={SearchStackScreen} name='Search' options={{ headerShown:false }} />
      <Tab.Screen component={CartStackScreen} name='Cart' options={{ headerShown:false }} />
      <Tab.Screen component={ProfileStackScreen} name='Profile' options={{ headerShown:false }} />
    </Tab.Navigator>
  );
}

const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{
            title:"",
            headerTitleStyle:{
                fontFamily:"Montserrat-Bold",
            },
            headerStyle:{
                backgroundColor:primaryColor,
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
            },
            headerLeft: () => (
                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily:"Montserrat-ExtraBold",fontSize:22,color:'#000'}}>my<Text style={{color:"green"}}>store</Text></Text>
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={()=>navigation.navigate('CartScreen')} style={{paddingRight:24}}>
                    <Text style={{backgroundColor:"black",position:'absolute',zIndex:1,right:"20%",fontSize:12,color:"#fff",width:22,height:22,textAlignVertical:'center',textAlign:'center',fontFamily:"Montserrat_700Bold",borderRadius:500}}>18</Text>
                    <Ionicons name='ios-cart-outline' size={24} color='#000' />
                </TouchableOpacity>
            ),

         }} />
        <HomeStack.Screen name='ProductDetails' component={ProductDetails} options={{
            headerTitle:"",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
            },
            headerTransparent:true,
            headerStyle:{
                elevation:0,
                backgroundColor:'transparent',
            },
         }} />
        <HomeStack.Screen name='ProductListScreen' component={ProductList} options={{
            headerTitle:"",
            headerStyle:{
                backgroundColor:primaryColor,
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
            },
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
         }} />
        <HomeStack.Screen name='ProductByCategoryScreen' component={ProductByCategory} options={{
            headerTitle:"",
            headerStyle:{
                backgroundColor:primaryColor,
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
            },
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
         }} />
    </HomeStack.Navigator>
);
const CategoriesStackScreen = ({navigation})=>(
    <CategoriesStack.Navigator>
        <CategoriesStack.Screen name='CategoriesScreen' component={Categories} options={{
            headerTitle:"All Categories",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
            headerLeft: ()=>(
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingLeft:24}}>
                    <Ionicons name='md-chevron-back-outline' size={24} />
                </TouchableOpacity>
            ),
            headerRight: ()=>(
                <TouchableOpacity onPress={()=>navigation.navigate('Search')} style={{paddingRight:24}}>
                    <Ionicons name='ios-search' size={22} />
                </TouchableOpacity>
            ),
         }} />
    </CategoriesStack.Navigator>
);
const CartStackScreen = ({navigation})=>(
    <CartStack.Navigator>
        <CartStack.Screen name='CartScreen' component={Cart} options={{
            headerTitle:"My Cart",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
            headerLeft: ()=>(
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingLeft:24}}>
                    <Ionicons name='md-chevron-back-outline' size={24} />
                </TouchableOpacity>
            ),
         }} />
    </CartStack.Navigator>
);
const SearchStackScreen = ({navigation})=>(
    <SearchStack.Navigator>
        <SearchStack.Screen name='SearchScreen' component={Search} options={{ headerShown:false }} />
    </SearchStack.Navigator>
);
const ProfileStackScreen = ({navigation})=>(
    <ProfileStack.Navigator>
        <ProfileStack.Screen name='ProfileScreen' component={Profile}  options={{
            title:"",
            headerShown:false,
        }} />
        <ProfileStack.Screen name='PolicyScreen' component={Policy} options={{
            headerTitle:"",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
        <ProfileStack.Screen name='OrderHistoryScreen' component={OrderHistory} options={{
            headerTitle:"Orders History",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
        <ProfileStack.Screen name='WishlistScreen' component={Wishlist} options={{
            headerTitle:"My Wishlist",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
        <ProfileStack.Screen name='DealsScreen' component={Deals} options={{
            headerTitle:"My Offers",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
        <ProfileStack.Screen name='DAddressScreen' component={Address} options={{
            headerTitle:"",
            headerTitleStMyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
        <ProfileStack.Screen name='NotificationScreen' component={Notifications} options={{
            headerTitle:"Notifications",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
        <ProfileStack.Screen name='ContactUScreen' component={Contact} options={{
            headerTitle:"Contact",
            headerTitleStyle:{
                fontFamily:"Montserrat-SemiBold",
                fontSize:16,
                color:'#000',
            },
            headerStyle:{
                backgroundColor:primaryColor,
            },
         }} />
    </ProfileStack.Navigator>
);

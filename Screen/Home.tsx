import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Login from './Login';
import Forget from './Forget';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebaseConfig';
import List from './List';
import Main from './main';
import Cart from './Cart';
const Home = ({navigation,route}) => {
    const Tab = createBottomTabNavigator();
    const email=route.params.email
    const id=route.params.id;
    console.log(id)
  return (
    <View style={{flex:1,backgroundColor:'white'} }>
      
            <View style={{flex:9,alignContent:'center',padding:10,}} >   
            <Tab.Navigator>
                <Tab.Screen name="List" component={List} initialParams={{id}} options={{
                 tabBarLabel: 'Home', title:"Home",
                 tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown:false
        }} />
              <Tab.Screen name="main" component={Main} initialParams={{email}}
               options={{headerShown:false ,title:"Tài khoản",
               tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={size} color={color} /> 
              ),}}/>
              <Tab.Screen name="Cart" component={Cart} initialParams={{id}}
               options={{headerShown:false ,title:"Giỏ hàng",
               tabBarIcon: ({ color, size }) => (
                <AntDesign name="heart" size={size} color={color} /> 
              ),}}/>
            </Tab.Navigator>
            </View>
    </View>
  )
}
const Style=StyleSheet.create({
    Text:{
        fontWeight:"bold",
       marginTop:60,
       color:'red',
    }
})
export default Home

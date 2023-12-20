import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity ,Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
const AddService = ({navigation}) => {
    const [todo,setTodo]=useState('');
    const [price,setprice]=useState('');
    const [Image,setImage]=useState(null)
    const pickimage=async()=>{
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
      if (!canceled) {
        setImage(assets[0].uri);
      }
      
    }
    const addTodo= async()=>{
     const doc=addDoc(collection(FIRESTORE_DB,'Todos'),{title:todo,gia:price,hinhanh:Image}).then(alert("Thêm thành công"))
    }
  return (
    <View style={{flex:1, flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
        <ImageBackground source={require("../Image/2.jpg") } 
        style={style.BackgroundCss}>
            <View style={style.View}>
                <Text style={style.Text}>Tên mặt hàng</Text>
                <TextInput style={style.Input} placeholder='Hãy nhập tên mặt hàng'  onChangeText={(text)=>setTodo(text)} ></TextInput>
                <Text style={style.Text}>Giá mặt hàng</Text>
                <TextInput style={style.Input} placeholder='Hãy nhập giá mặt hàng' onChangeText={(text)=>setprice(text)}></TextInput>
                <TouchableOpacity title="Pick an image from camera roll" onPress={pickimage} style={{padding:10}} >
                {Image ? (
                <View>
                   <Text>Đã có ảnh</Text>
                    </View>
                      ) : (
                  <Text> Chưa có ảnh hãy đăng ảnh</Text>
                  )}</TouchableOpacity>
                <TouchableOpacity style={style.Button} onPress={addTodo}><Text style={style.Text_Button}>Thêm mặt hàng</Text></TouchableOpacity> 
        
            </View>
        </ImageBackground>
    </View>
  );
};
export default AddService;
const style=StyleSheet.create({
    View:{
        height:300,
        width:300,
        backgroundColor:'white',
        borderRadius:10, 
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity:0.3,
        justifyContent:"center",
        alignItems:'center'
    },
    BackgroundCss:{
        flex:1,
        width:900,
        height:900,
        alignItems:"center",
        justifyContent:"center"
    },
    Text:{
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"lucida grande', tahoma, verdana, arial, sans-serif",
    },
    Input:{
        height:40,
        width:250,
        borderBottomWidth:0.5,
        margin:10,
        padding:10,
        borderRadius:10,

    },
    Button:{
        backgroundColor:"#0082fe",
        height:40,
        width:250,
        borderWidth:0.2,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.3,
        
    },
    Text_Button:{
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"lucida grande', tahoma, verdana, arial, sans-serif",
        color:"white"
        
    },
})
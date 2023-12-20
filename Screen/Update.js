import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, updateDoc,doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebaseConfig';

const Update = ({route}) => {
    const [newPrice, setNewPrice] = useState(route.params.gia);
    const [newTitle,setNewTitle]=useState(route.params.title);
    const id=route.params.id;
    const Update= async()=>{
        try
        {
            const ref=doc(FIRESTORE_DB,`Todos/${id}`)
            await updateDoc(ref,{
                title:newTitle,
                gia:newPrice,
            }).then(alert("Cập nhật thành công"))
        }
        catch(error)
        {
            console.error('Error updating document:', error);
        }
      
    }
  return (
    <View style={{flex:1, flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
        <ImageBackground source={require("../Image/2.jpg") } 
        style={style.BackgroundCss}>
            <View style={style.View}>
                <Text style={style.Text}>Tên mặt hàng</Text>
                <TextInput style={style.Input} placeholder='Hãy nhập tên mặt hàng' value={newTitle}  onChangeText={(text)=>setNewTitle(text)} ></TextInput>
                <Text style={style.Text}>Giá mặt hàng</Text>
                <TextInput style={style.Input} placeholder='Hãy nhập giá mặt hàng' value={newPrice}  onChangeText={(text)=>setNewPrice(text)}></TextInput>
                <TouchableOpacity style={style.Button} onPress={()=>Update()}><Text style={style.Text_Button}>Cập nhật mặt hàng</Text></TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  );
};

export default Update;
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
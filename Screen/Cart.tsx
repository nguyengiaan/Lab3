import { Image,View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Button } from 'react-native'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'
import {FIRESTORE_DB} from '../firebaseConfig'
import Ionicons from'@expo/vector-icons/Ionicons'
import {Entypo} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Login from './Login'
import Forget from './Forget';
import { string } from 'yup'
import { useRoute } from '@react-navigation/native'
export interface Todo{
    title:string;
    done:boolean;
    id:string;
    gia:number;
    hinhanh:string;
}
const Cart=({navigation,route})=> {
    const Tab = createBottomTabNavigator();
    const [todos,setTodos]=useState<any[]>([]);
    const [todo,setTodo]=useState('');
    const {params}=useRoute();
    useEffect(()=>{
        const todoRef=collection(FIRESTORE_DB,'Favorite')
        const queryCondition = query(todoRef, where('id', '==',params ));
        const subcriber=onSnapshot(queryCondition,{
            next:(snapshot)=>{
                const todos: any[]=[];
                snapshot.docs.forEach((doc)=>{
                    todos.push({
                        id:doc.id,
                        ...doc.data(),
                    } as Todo);
                });
                setTodos(todos);
            }
        })
        return ()=>subcriber();
    },[]);

    const renderTodo=({item}:any)=>{
        const ref=doc(FIRESTORE_DB,`User/${item.id}`)
        console.log(ref)
        const toggleDone=async()=>{
            updateDoc(ref,{done:!item.done})

        }
        const deletitem=async()=>{
            deleteDoc(ref).then(()=>{alert('xóa thành công')});
        }
        const title=item.title
        const gia=item.gia
        const id=item.id
        return(
            <View style={styles.todoContainer}>
                <View style={{flex:1,padding:10}}>
                 <TouchableOpacity onPress={()=>{navigation.navigate("Update",{title,gia,id})}} style={styles.todo}>
                    <Text style={styles.todoText}>{item.title}</Text>
                </TouchableOpacity> 
                </View>
                <View style={{flex:3, alignItems:"center",marginLeft:15}}>
                    <Image source={{uri:item.hinhanh}} style={{width:100,height:100,borderRadius:10}} />
                </View>
                <View style={{flex:2,flexDirection:"row",alignItems:"flex-end",justifyContent:"center",marginLeft:20}}>
                    <View style={{flexDirection:"row",paddingRight:15,alignItems:"center",justifyContent:'center',marginTop:7}}>
                   <TouchableOpacity style={{height:30,width:60,borderRadius:10,backgroundColor:"#FFD700",alignItems:'center',justifyContent:'center'}} onPress={()=>{deletitem}}>
                        <Text>Xóa</Text>
                   </TouchableOpacity>

                
                </View>
                </View>
            </View>
        ) 
    }
  return (
    <ImageBackground source={require("../Image/8.jpg")} style={styles.BackgroundCss} >
    <View style={styles.container}> 
        <View >
              {todos.length >0 && (
                <View>
                    <FlatList data={todos} 
                    renderItem={(item)=>renderTodo(item)} 
                    keyExtractor={(todo: Todo)=>todo.id}  
                    horizontal={false} 
                    numColumns={2}
          />
                </View>
              )
              }
         </View>
    </View>
</ImageBackground> 
  )
}
const styles=StyleSheet.create({
    container:{
        marginHorizontal:20,
     
    },
    form:{
        flexDirection:'row',
        marginVertical:20,
        alignItems:'center'
        
    },
    input:{
        width:333,
        height:50,
        borderWidth:1,
    },
    todoContainer:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingRight:20,
        marginVertical:4,
        borderRadius:10,
        width:155,
        height:180,
        flex:1,
        justifyContent:"center",
        borderWidth:1,
    },
    todoText:{
        paddingLeft:16,
        fontSize:15,
        fontWeight:"bold",
        fontFamily:"lucida grande', tahoma, verdana, arial, sans-serif",
    },
    todo:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    BackgroundCss:{
        flex:1,
        width:360,
        height:720,
       
    },
})
export default Cart

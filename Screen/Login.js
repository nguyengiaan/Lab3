import React, { useState } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { View,Text, TextInput ,Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { confirmPasswordReset, createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup'
const Login=({navigation})=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setloading]=useState(false)
    const auth=FIREBASE_AUTH;
    const signIn= async ()=>{
        setloading(true)
        try{
           if(email != null && password != null)
           {
                const reponse =await signInWithEmailAndPassword(auth,email,password)
            
                navigation.navigate("main",{email})
           }
        }catch(error){
            console.log(error)
            alert('Tài khoản hoặc mật khẩu sai')
        }
        
    }
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('lỗi email rồi bạn yêu').required('Nhập email bạn iu!'),
        password: Yup.string()
          .min(6, 'Mật khẩu quá thấp')
          .max(30, 'Mật khẩu quá dài').required('Nhập mật khẩu bạn iu!!')
      });
    
    return(
        <Formik initialValues={
            {email:'',password:''}

        } validationSchema={SignupSchema}>
        {({values,errors,touched,handleChange,handleSubmit})=>(
             <View style={{flex:1,backgroundColor:'white'}}>
             <ImageBackground source={require('../Image/android2.jpg')} style={{flex:1}}>
             <View style={{flex:5,alignItems:'center',justifyContent:'flex-end'}}>
             <Image source={require('../Image/login-removebg-preview.png')} style={{height:250,width:250,alignContent:'center',justifyContent:'center'}}/>
                  <Text style={style.Text_Register}>ĐĂNG NHẬP BẠN ÊI</Text>
             </View>
            <View style={{flex:5,alignItems:'center',justifyContent:'flex-start'}}>
             <TextInput  
                placeholder='Vui lòng nhập gmail' 
                style={style.TextInput_Register} autoCapitalize='none'
                value={setEmail(values.email)}
                onChangeText={handleChange('email')}
                />
                {errors.email && (<Text style={style.Text_Errors}>{errors.email}</Text>)}
             <TextInput 
                placeholder='Vui lòng nhập password'
                style={style.TextInput_Register} 
                secureTextEntry={true}
                value={setPassword(values.password)}
                 onChangeText={handleChange('password')}
                 />
                   {errors.password && (<Text style={style.Text_Errors}>{errors.password}</Text>)}
             <TouchableOpacity style={style.button_Register}
              onPress={signIn}>
                 <Text style={style.Text_button}>Đăng nhập</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate("Register")}} style={{margin:8}}>
                     <Text style={{color:'blue'}}>Bạn iu chưa có tài khoản?</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{navigation.navigate("Forget")} } style={{margin:8}}>
                     <Text style={{color:'blue'}}>Bạn iu quên mật khẩu?</Text>
             </TouchableOpacity>
             </View>
             </ImageBackground>
         </View>
        )}

        
       
        </Formik>
    )
}
export default Login
const style=StyleSheet.create({
    Text_Register:{
        fontWeight:'bold',
        fontSize:30,
        color:'white'

    },
    
    TextInput_Register:{
        fontWeight:50,
        borderBottomWidth:0.5,
        borderStartEndRadius:0,
        width:300,
        height:40,
        margin:5,
        borderRadius:10,
        paddingLeft:10,
        color:'white'
    },
    button_Register:{
        borderWidth:0,
        width:300,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange'
    },
    Text_button:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    button_Register1:{
        width:300,
        height:40,
        alignItems:'center',
        justifyContent:'center',
    },
    Text_Errors:{
        color:"red",

    }
})
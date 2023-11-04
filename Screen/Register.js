import React, { useState } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { View,Text, TextInput ,Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup'
const Login=({navigation})=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setloading]=useState(false)
    const auth=FIREBASE_AUTH;
    const signUp= async ()=>{
        setloading(true)
        try{
           if(email != null && password != null)
           {
                const reponse =await createUserWithEmailAndPassword(auth,email,password)
                navigation.navigate("Login")
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
          .max(30, 'Mật khẩu quá dài').required('Nhập mật khẩu bạn iu!!').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'Phải lớn hơn 8 ký tự phải có chữ in hoa,in thường,một ký tự đặc biệt'),
        confirmpassword:Yup.string().required("nhập lại mật khẩu bạn iu").oneOf([Yup.ref('password')])
      });
    return(
        <Formik initialValues={
            {email:'',password:'',confirmpassword:''}

        } validationSchema={SignupSchema}>
        {({values,errors,touched,handleChange,handleSubmit,setFieldTouched,isValid})=>(
             <View style={{flex:1,backgroundColor:'white'}}>
             <ImageBackground source={require('../Image/android2.jpg')} style={{flex:1}}>
             <View style={{flex:5,alignItems:'center',justifyContent:'flex-end'}}>
             <Image source={require('../Image/login-removebg-preview.png')} style={{height:250,width:250,alignContent:'center',justifyContent:'center'}}/>
                  <Text style={style.Text_Register}>ĐĂNG KÝ BẠN ÊI</Text>
             </View>
            <View style={{flex:5,alignItems:'center',justifyContent:'flex-start'}}>
             <TextInput  
                placeholder='Vui lòng nhập gmail' 
                style={style.TextInput_Register} autoCapitalize={false}
                value={setEmail(values.email)}
                onChangeText={handleChange('email')}
                onBlur={()=>{setFieldTouched('email')}}
            
                />
                {touched.email && errors.email && (<Text style={style.Text_Errors}>{errors.email}</Text>)}
             <TextInput 
                placeholder='Vui lòng nhập password'
                style={style.TextInput_Register} 
                secureTextEntry={true}
                autoCapitalize={false}
                value={setPassword(values.password)}
                 onChangeText={handleChange('password')}
                 onBlur={()=>{setFieldTouched('password')}}
                 />
                   {touched.password && errors.password && (<Text style={style.Text_Errors}>{errors.password}</Text>)}
                <TextInput 
                placeholder='Vui lòng nhập lại mật khẩu'
                style={style.TextInput_Register} 
                secureTextEntry={true}
                autoCapitalize={false}
                value={values.confirmpassword}
                 onChangeText={handleChange('confirmpassword')}
                 onBlur={()=>{setFieldTouched('confirmpassword')}}
                 />
                {touched.confirmpassword && errors.confirmpassword && (<Text style={style.Text_Errors}>{errors.confirmpassword}</Text>)}
             <TouchableOpacity style={[style.button_Register,{backgroundColor: isValid ? '#686765' : 'orange'}]}
              onPress={signUp} disabled={!isValid}>
                 <Text style={style.Text_button}>Đăng ký</Text>
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
        color:'black',
     
    },
    button_Register:{
        borderWidth:0,
        width:300,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
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
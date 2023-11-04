import React from 'react'
import { ImageBackground, StyleSheet,Text,View,Image } from 'react-native'
const Main=({navigation,route})=>{
    return(
        <View style={style.View_Main}>
            <ImageBackground source={require('../Image/JHYTI.jpg')} style={style.Background}>
                <View style={style.View_1}>
                    <View style={{flex:2}}>
                          <Image source={require("../Image/login-removebg-preview.png") } style={{width:200,height:200,marginBottom:120}}/>
                    </View>
               
                   <View style={style.View_2}>
                        <Text style={style.Text}>{route.params.email}</Text>
                   </View>

                </View>
            </ImageBackground>
        </View>
    )
}
const style=StyleSheet.create({
    View_Main:{
        flex:1,
      
    },
    Background:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    View_1:{
        width:300,
        height:300,
        backgroundColor:'white',
        borderRadius:5,
        shadowColor:'black',
        shadowOffset:{width:10,height:10},
        shadowOpacity:0.4,
        justifyContent:'center',
        alignItems:'center'

    },
    Text:{
       color:'black',
       textShadowOffset:{height:0,width:0.9},
       textShadowColor:'black',
       fontSize:20,
       fontFamily:'sans-serif-medium',
       fontStyle:'italic'
    },
    View_2:{
    
        flexDirection:'column',
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Main
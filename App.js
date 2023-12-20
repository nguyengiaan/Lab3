import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Screen/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login';
import Main from './Screen/main';
import Forget from './Screen/Forget';
import Header from './Screen/Header';
import Home  from './Screen/Home';
import AddService from './Screen/AddService';
import List from './Screen/List'
import Update from './Screen/Update';
import Customer from './Screen/Customer';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:true,headerStyle:{
              shadowOffset:{height:4, width:4},
              shadowOpacity:0.5,  
              shadowColor:"black",
              backgroundColor:"#cecfd3",
        },title:"Phụ kiện điện tử"}}/>
        <Stack.Screen name='List' component={List} options={{headerShown:false}}/>
        <Stack.Screen name='AddService' component={AddService} options={{headerShown:true}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='main' component={Main} options={{headerShown:false}}/>
        <Stack.Screen name='Update' component={Update} options={{headerShown:true}}/>
        <Stack.Screen name='Customer' component={Customer} options={{headerShown:true}}/>
        <Stack.Screen name='Register' component={Register} 
            options={{headerTitle:'Register', headerStyle:{
                backgroundColor:'#135275',
                shadowColor:"#135275",
                elevation:10,
                shadowOffset:{height:10, width:20}

        }}}/>
        <Stack.Screen name='Forget' component={Forget} options={{headerShown:true,headerStyle:{
                backgroundColor:'#135275',
                shadowColor:"#135275",
                elevation:10,
                shadowOffset:{height:10, width:20}
        }}}/>
       
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

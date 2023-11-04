import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Screen/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screen/Login';
import Main from './Screen/main';
import Forget from './Screen/Forget';
import Header from './Screen/Header';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='main' component={Main} options={{headerShown:false}}/>
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

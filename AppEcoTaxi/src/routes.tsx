import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "./screens/home"
import { LoginScreenView } from "./screens/login"

export type RootStackParamList = {
    Home: undefined
    Login: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RoutesScreen () {
    return(
        <Stack.Navigator screenOptions={{
           animation : 'slide_from_right',
           headerStyle: {
            backgroundColor: '#236523',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
            fontFamily: 'CormorantSC-Medium'
           }
        }}>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown : false,}}/>
            <Stack.Screen name='Login' component={LoginScreenView} options={{
                title: 'Acessar caronas',
            }} />
        </Stack.Navigator>        
    )
}
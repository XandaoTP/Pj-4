import React, { useEffect } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "./screens/home"
import { LoginScreenView } from "./screens/login"
import { RidersScreen } from "./screens/rides"
import auth from '@react-native-firebase/auth'
import { getUser } from "./services/getuser"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, selectUserLoggedIn, updateUser } from "./store/slices/userSlice"

export type RootStackParamList = {
    Home: undefined
    Login: undefined
    Corridas: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RoutesScreen () {
    const dispatch = useDispatch()
    useEffect (() => {
    auth().onAuthStateChanged(async currentUSer => {
        if(currentUSer) {
           const user =  await getUser(currentUSer.uid)
           dispatch(updateUser(user))
        } else {
            dispatch(deleteUser())
        }
    })    
    }, [dispatch])
     const isUserLoggedIn = useSelector(selectUserLoggedIn)
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
            {!isUserLoggedIn ? (
                <>
                    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown : false,}}/>
                    <Stack.Screen name='Login' component={LoginScreenView} options={{
                     title: 'Acessar caronas',
                 }} />
                </>
            ):(
                <Stack.Screen name='Corridas' component={RidersScreen} options={{
                title: 'Verificar corridas',
                }} />
            )}         
        </Stack.Navigator>        
                
    )
}
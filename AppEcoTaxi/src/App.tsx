import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { RoutesScreen } from "./routes";
import Toast from 'react-native-toast-message';


export default function App () {
    return (
        <NavigationContainer>
            <RoutesScreen />
            <Toast />
        </NavigationContainer>
    );        
}

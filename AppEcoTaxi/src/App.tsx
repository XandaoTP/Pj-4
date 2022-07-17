import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { RoutesScreen } from "./routes";
import Toast from 'react-native-toast-message';
import { Provider as ReduxProv } from 'react-redux'
import store from "./store/store";

export default function App () {
    return (
        <ReduxProv store={store}>
            <NavigationContainer>
                <RoutesScreen />
                <Toast />
            </NavigationContainer>
        </ReduxProv>
    );        
}

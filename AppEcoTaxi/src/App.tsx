import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { HomeScreen } from "./screens/home"

export default function App () {
    return (
        <NavigationContainer>
            <HomeScreen />
        </NavigationContainer>
    )        
}

import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { RoutesScreen } from "./routes";



export default function App () {
    return (
        <NavigationContainer>
            <RoutesScreen />
        </NavigationContainer>
    );        
}

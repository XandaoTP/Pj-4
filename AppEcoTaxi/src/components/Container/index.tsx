import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
    children: React.ReactNode
    padding?: boolean
    center?: boolean
}

export function Container ({children, padding = false, center = false}: Props) {
    return (
        <View style={[styles.container, padding ? styles.padding : {}, center ? styles.center : {} ]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#858181',
        flex: 1
    },
    padding: {
        padding: 14
    },
    center: {
        justifyContent:'center'

    }
})
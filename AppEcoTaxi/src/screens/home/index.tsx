import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import logo from '../../assets/img/mudanca-climatica.jpg'

export function HomeScreen () {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text 
                style={styles.text}>
                    Eco Taxi
                </Text>
                <Image 
                source={logo}
                style={styles.logo}/>
            </View>
        </SafeAreaView>
    )
        
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
        },
    text: {
        color: '#00a95d',
        fontSize: 30
    },
    logo: {
        width: 300,
        height: 300
    }
});
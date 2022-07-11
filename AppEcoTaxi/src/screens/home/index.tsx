import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../../assets/components/custombutton";
import logo from '../../assets/img/mudanca-climatica.jpg'

export function HomeScreen () {
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
                <Text 
                style={styles.text}>
                    Eco Taxi
                </Text>
                <Image 
                source={logo}
                style={styles.logo}/>
                <CustomButton>Entrar</CustomButton>
            </View>
        </SafeAreaView>
    )
        
}

const styles = StyleSheet.create({
    area: {
        flex:1,
        backgroundColor: '#232323',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        flex: 1,
    },
    text: {
        color: '#1f6920',
        fontSize: 30,
        textShadowColor: 'rgba(9, 131, 23, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 1,
    },
    logo: {
        width: 300,
        height: 300
    }
});
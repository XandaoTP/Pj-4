import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { CustomButton } from "../../components/custombutton";
import { CustomText } from "../../components/customtext";
import logo from '../../assets/img/mudanca-climatica.jpg'
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen ({navigation} : Props) {
    const EnterScreenView = () => {
        navigation.navigate('Login');
    } 
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
                <CustomText bold
                style={styles.text}>
                    Eco Taxi
                </CustomText>
                <Image 
                source={logo}
                style={styles.logo}/>
                <CustomButton onPress={EnterScreenView}>Entrar</CustomButton>
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
        fontSize: 50,
        textShadowColor: 'rgba(9, 131, 23, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 1,
    },
    logo: {
        width: 300,
        height: 300
    }
});
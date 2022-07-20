import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CustomButton } from "../../components/custombutton";
import logo from '../../assets/img/LOGO_CARONA.png'
import title from '../../assets/img/THINK-CLEAN.jpg'
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen ({navigation} : Props) {
    const EnterScreenView = () => {
        navigation.navigate('Login');
    } 
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
            <Image 
                source={title}
                style={styles.title}/>
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
        backgroundColor: '#efefef',
        marginBottom: 25
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    logo: {
        width: 200,
        height: 200
    },
    title: {
        width: 200,
        height: 350,
        resizeMode: 'contain',
    }
})
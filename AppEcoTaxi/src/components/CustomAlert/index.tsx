import React from "react"
import { StyleSheet, View } from "react-native"
import { CustomText } from "../customtext"

type Props = {
    children: React.ReactNode
}
export function CustomAlert ({ children }: Props) {
    return (
        <View style={styles.view}>
            <CustomText style={styles.alert}>{children}</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#ede8e8',
        borderWidth: 2,
        padding: 31,
        borderColor: '#828282',
        height: '100%',
        justifyContent: 'center'
    },
    alert:{
        color: '#f1081f',
        fontSize:22,
        textAlign:'center',
        fontWeight: 'bold' 
    }
})
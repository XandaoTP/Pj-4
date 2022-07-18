import React from "react"
import { StyleSheet, View } from "react-native"
import { CustomText } from "../customtext"

type Props = {
    children: React.ReactNode
}
export function CustomAlert ({ children }: Props) {
    return (
        <View>
            <CustomText style={styles.alert}>{children}</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    alert:{
        fontSize:20
    }
})
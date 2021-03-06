import React from "react"
import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import { CustomText } from "../customtext"

type Props = {
    label?: string;
    error?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    loading?: boolean;
} & TextInputProps;

export function InputFormField ({label, error, isInvalid = false, isValid = false, ...otherProps}: Props) {
    return (
        <View style={styles.spaceView}>
            <CustomText style={styles.label}>{label}</CustomText>
            <TextInput style={[styles.textcolor,styles.input, isInvalid ? styles.invalidInput : {}, isValid ? styles.validInput : {}, ]} {...otherProps} />
            {isInvalid && error && (
            <CustomText style={styles.errorText}>{error}</CustomText> )}
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        paddingLeft: 16,
        color: '#000000',
        fontSize: 18
    },
    textcolor: {
        color: '#000000'
    },
    input:{
        borderWidth: 2,
        borderColor:'#00000052',
        borderRadius: 55,
        paddingLeft: 15,
        marginVertical: 6,
    },
    invalidInput:{
        borderColor: '#9e1a1a'
    },
    validInput:{
        borderColor: '#236523'
    },
    errorText:{
        color: '#9e1a1a'
    },
    spaceView:{
        marginBottom: 8
    },
    placeHolderText: {
        color: '#000000'
    }
})
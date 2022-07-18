import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { CustomText } from "../customtext";

type Props = TouchableOpacityProps & {
    variant?: 'primary' | 'success'
    size?: 'md' | 'lg'
    loading?: boolean
} 

export function CustomButton ({children, variant = 'primary', size = 'md', ...otherProps}: Props ) {
    return(
        <TouchableOpacity style={[styles.base, styles[variant], styles[size]]} {...otherProps}>
            <CustomText style={styles.textBase}>{children}</CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base:{
        borderRadius: 55,
    },
    textBase: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'CormorantSC-Regular'
    },
    primary: {
        backgroundColor: '#05551e'
    },
    success:{
        backgroundColor: '#1b271f'
    },
    lg:{
        paddingHorizontal: 25,
        paddingVertical: 8
    },
    md: {
        paddingHorizontal: 25,
        paddingVertical: 8
    }
})
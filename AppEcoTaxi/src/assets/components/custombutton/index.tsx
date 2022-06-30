import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { CustomText } from "../customtext";

type Props = TouchableOpacityProps & {
    variant?: 'primary' | 'success'
    size?: 'md' | 'lg'
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
        color: '#ffffff',
    },
    primary: {
        backgroundColor: '#31008b'
    },
    success:{
        backgroundColor: '#078632'
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
import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { Container } from "../../components/Container";
import { InputFormField } from "../../components/inputFormField";


export function LoginScreenView () {
    const [inputValue, setInputValue] = useState('')
    return(
        <Container padding>
            <InputFormField
            label='Usuário'
            placeholder="Digite seu usuário " 
            value={inputValue} 
            onChangeText={newInputValue => setInputValue(newInputValue)}
            keyboardType= {'twitter'}
            error='s'
            isValid
            />
             <InputFormField
            label='Usuário'
            placeholder="Digite seu usuário " 
            value={inputValue} 
            onChangeText={newInputValue => setInputValue(newInputValue)}
            keyboardType= {'twitter'}
            error='s'
            isValid
            />
        </Container>      
    )
}


import React from "react";
import { Formik, useFormik } from "formik";
import { StyleSheet, Text, TextInput } from "react-native";
import { Container } from "../../components/Container";
import { InputFormField } from "../../components/inputFormField";
import { CustomButton } from "../../components/custombutton";
import * as yup from 'yup';
import { LoginUser } from "../../services/login";

type InputValues = {
    email: string
    password: string
}

export function LoginScreenView () {
    const formik = useFormik<InputValues>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('Informe seu acesso.').email('Informe um acesso válido.'),
            password: yup.string().required('Informe a senha.')
        }),
        onSubmit: async (values) => {
            try {
             const user = await LoginUser(values)
             console.log('sucesso', user)
            }catch(error) {
                console.log(error);
            };
        },
    });
    const getInputProps = (InputName: keyof InputValues) => ({
        value: formik.values[InputName],
        onChangeText: formik.handleChange(InputName),
        onBlur: formik.handleBlur(InputName),
        error: formik.errors[InputName],
        isValid: formik.touched[InputName] && !formik.errors[InputName],
        isInvalid: formik.touched[InputName] && !!formik.errors[InputName]
        }); 
    return(
        <Container padding>
            <InputFormField
            {...getInputProps('email')}
            label='Usuário'
            placeholder="Digite seu usuário " 
            keyboardType= {'email-address'}
            />
             <InputFormField
            {...getInputProps('password')}
            label='Senha'
            placeholder="Digite sua senha." 
            keyboardType= {'twitter'}
            secureTextEntry
            />
            <CustomButton onPress={formik.handleSubmit} disabled={formik.isValidating || formik.isSubmitting} loading={formik.isValidating || formik.isSubmitting}>Entrar</CustomButton>
        </Container>      
    )
}


import React from "react";
import { useFormik } from "formik";
import { Container } from "../../components/Container";
import { InputFormField } from "../../components/inputFormField";
import { CustomButton } from "../../components/custombutton";
import * as yup from 'yup';
import { LoginUser } from "../../services/login";
import Toast from 'react-native-toast-message'
import { firebaseAuthErrors } from "../../utils/FirebaseErrors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/userSlice";

type InputValues = {
    email: string
    password: string
}
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

export function LoginScreenView ({ navigation }: Props) {
    const dispatch = useDispatch()
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
             dispatch(updateUser(user))
             navigation.navigate('Corridas')
            }catch(error) {
                const errorMsg = firebaseAuthErrors(error) && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') ? 'Usuario ou senha inválido.' : 'Falha ao conectar.Tente novamente.'
                Toast.show ({
                    type: 'error',
                    text1: errorMsg,
                })
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

const styles = StyleSheet.create({
    textcolor:{
        color: '#ffff'
    }
})
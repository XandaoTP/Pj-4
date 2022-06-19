import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/custombutton";
import { FormField } from "../../components/formfield";
import { Layout } from "../../components/layout";
import { PageTitle } from "../../components/pagetitle";
import * as yup from 'yup'
import { LoginUser } from "../../services/login";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/userSlice";

type FormValues = {
    email: string
    password: string
}
export function LoginView () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string()
            .required('Preencha o campo E-mail')
            .email('Preencha um E-mail válido'),
            password: yup.string()
            .required('Digite sua senha.')
        }),
        onSubmit: async (values) => {
            try {
                const user = await LoginUser(values)
                dispatch(updateUser(user))
                navigate('/novacarona')
            } catch(error) { 
                const errorMsg = error instanceof FirebaseError && (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED) 
                    ? 'Login ou senha inválidos.'
                    : 'Falha ao fazer login.'
                    toast.error(errorMsg)
        }       
    }
})
    const formProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && !formik.errors[fieldName]
        }
    }
    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Login</PageTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormField
                            {...formProps('email')} 
                            label='E-mail'
                            type='email'
                            placeholder='infome seu E-mail.'
                            />
                            <FormField
                            {...formProps('password')} 
                            label='Senha'
                            type='password'
                            placeholder='infome sua senha.'
                            />
                            <div className="d-grid mt-4">
                            <CustomButton 
                            type='submit'
                            loading={formik.isValidating || formik.isSubmitting}
                            disabled={formik.isValidating || formik.isSubmitting}
                            >
                                Entrar
                            </CustomButton>
                            <p className="text-center">Não possui conta? <br/><Link to='/signin'>Cadastre-se</Link></p>
                            </div>
                        </Form>
                    </Col>
                </Row> 
            </Container>           
                        
        </Layout>    
    )
}
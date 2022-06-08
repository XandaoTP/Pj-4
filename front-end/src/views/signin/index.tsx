import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton";
import { FormField } from "../../components/formfield";
import { Layout } from "../../components/layout";
import * as yup from 'yup'
import { sensitiveHeaders } from "http2";
import { PageTitle } from "../../components/pagetitle";

type FormValues = {
    name: string
    email: string
    phone: string
    password: string
    agree: boolean
}

export function SignInView () {
   const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            phone:'',
            password:'',
            agree: false
        },
        validationSchema: yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required('Preencha um e-mail.').email('Preencha um e-mail Válido.'),
            phone: yup.string().required('Prencha um telefone válido.'),
            password: yup.string().required('Digite uma senha.').min(6, 'Digite no minimo 6 caractéres.').max(8, 'Preencha no maximo 8 caracteres.'),
            agree: yup.boolean().equals([true], 'Aceite os termos de uso.')

        }),
        onSubmit: (values) => {
            console.log('oi', values)
            formik.setFieldError('name', 'Preencha o nome.')
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
        <Layout withoutMargin>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle> Sign In </PageTitle>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormField 
                            label="nome"
                            placeholder="Digite o seu nome."
                            {...formProps('name')}                 
                            />
                            <FormField 
                            label="E-mail"
                            placeholder="Digite o seu E-mail."
                            {...formProps('email')}
                            type="email"                    
                            />
                            <FormField 
                            label="Telefone"
                            placeholder="Digite o seu telefone."
                            {...formProps('phone')}
                            mask={[
                                {mask: '(00) 0000-0000'},
                                {mask: '(00) 00000-0000'}
                            ]}
                            onAccept={value => formik.setFieldValue('phone', value)}                    
                            />
                            <FormField 
                            label="Senha"
                            placeholder="Digite sua senha."
                            {...formProps('password')}
                            type="password"                
                            />
                            <Form.Group 
                            controlId="input-agree">
                            <Form.Check 
                                {...formProps('agree')}
                                type="checkbox"
                                label={<>Li e aceito os <a href='/termosdeuso.pdf' target='_blank'>termos de uso.</a></>}
                            />
                            {formik.touched.agree && formik.errors.agree &&(
                                <Form.Control.Feedback type='invalid' className="d-block">
                                   {formik.errors.agree}     
                                </Form.Control.Feedback>
                            )}
                            </Form.Group>
                            <div className="d-grid mt-3 mb-3">
                            <CustomButton type="submit">
                                Criar Conta
                            </CustomButton>
                            </div>
                            <p className="text-center">Já possui conta? <br/><Link to='/login'>Acesse</Link></p>
                        </Form>
                    </Col>
                </Row>   
            </Container>
        </Layout>
    )
}
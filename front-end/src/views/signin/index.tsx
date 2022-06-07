import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/custombutton";
import { FormField } from "../../components/formfield";
import { Layout } from "../../components/layout";
import { PageTitle } from "../../components/pagetitle";


export function SignInView () {
    return (
        <Layout withoutMargin>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle> Sign In </PageTitle>
                        <Form>
                            <FormField 
                            label="nome"
                            placeholder="Digite o seu nome."
                            controlId="input-name"                    
                            />
                            <FormField 
                            label="E-mail"
                            placeholder="Digite o seu E-mail."
                            controlId="input-email"
                            type="email"                    
                            />
                            <FormField 
                            label="Telefone"
                            placeholder="Digite o seu telefone."
                            controlId="input-phone"
                            mask={[
                                {mask: '(00) 0000-0000'},
                                {mask: '(00) 00000-0000'}
                            ]}                    
                            />
                            <FormField 
                            label="Senha"
                            placeholder="Digite sua senha."
                            controlId="input-password"
                            type="password"                
                            />
                            <Form.Group 
                            controlId="input-agree">
                            <Form.Check 
                                type="checkbox"
                                label={<>Li e aceito os <a href='/termosdeuso.pdf' target='_blank'>termos de uso.</a></>}
                            />
                            </Form.Group>
                            <div className="d-grid mt-3 mb-3">
                            <CustomButton>
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
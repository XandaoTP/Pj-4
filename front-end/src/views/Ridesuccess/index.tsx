import {  Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Layout } from "../../components/layout";
import Carona from "../../assetes/img/LOGO_CARONA.png"
import { CustomButton } from "../../components/custombutton";

export function SuccessView () {
    const darklightmode = JSON.parse(localStorage.getItem('value') || '{}')
    return (
        <Layout>
            <div className={!darklightmode ? "bg-dark vh-100" : "bg-white vh-100" }>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={4} className="justify-content-center text-center d-flex flex-column">
                        <p className={!darklightmode ? "text-white mt-3" : "text-dark mt-3"}>Obrigado por oferecer carona!</p>
                        <img src={Carona} alt='Carona Sempre' width={159} height={146} className='fluid mt-4 align-self-center mb-5'/>
                        <CustomButton variant="secondary" size="lg" to='/sucesso'>Oferecer nova carona</CustomButton> 
                    </Col>
                </Row>
            </Container>
            </div>
        </Layout>
    )
    
}

const ContainerStyled = styled(Container)`
background-image: url(/z);
    
`
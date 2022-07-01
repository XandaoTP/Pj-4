import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/layout";
import { PageTitle } from "../../components/pagetitle";
import { EstimateDetails } from "./estimateDetails";
import { EstimateForm } from "./estimateform";

export function NewRideView () {
    const darklightmode = JSON.parse(localStorage.getItem('value') || '{}')
    return(
        <Layout>
            <Container className={!darklightmode ? 'bg-dark vh-100' : 'bg-white '}>
                <PageTitle>Ofereça carona</PageTitle>
                <Row>
                    <Col xs={12} md={6} lg={7}>
                        <EstimateForm />
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <EstimateDetails />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Layout } from "../../components/layout";
import { PageTitle } from "../../components/pagetitle";


export function Error404 () {
    return (
        <Layout>
            <Container className='text-center'>
                <PageTitle>PAGINA NÃO ENCONTRADA</PageTitle>
                <Msgerror bg-secondary>Erro ao buscar pagina. Use o menu acima.</Msgerror>
            </Container>    
        </Layout>
    )
}

const Msgerror = styled.p`
 color: #e03131; 
`
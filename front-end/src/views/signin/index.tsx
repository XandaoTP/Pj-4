import { Container } from "react-bootstrap";
import { FormField } from "../../components/formfield";
import { Layout } from "../../components/layout";
import { PageTitle } from "../../components/pagetitle";


export function SignInView () {
    return (
        <Layout withoutMargin>
            <Container>
                <PageTitle> Sign In </PageTitle>
                <FormField
                controlId='UserName'
                label='Nome'
                placeholder='Digite seu nome' 
                error='preencha seu nome.'
                isInvalid
                />
            </Container>
        </Layout>
    )
}
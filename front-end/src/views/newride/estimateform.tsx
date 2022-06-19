import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { formatDiagnostic } from "typescript";
import { CustomButton } from "../../components/custombutton";
import { FormField } from "../../components/formfield";

type FormValues = {
    saida: string
    chegada: string
    comments: string
}

export function EstimateForm () {
    const formik = useFormik<FormValues>({
        initialValues: {
            saida:'',
            chegada: '',
            comments: ''
        },
        onSubmit: async (values) => {
            console.log(values)
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
        <Form onSubmit={formik.handleSubmit}>
            <FormField
            {...formProps('saida')}
                label="Endereço de saída"
                placeholder="Informe o endereço de saída"
            />
             <FormField
            {...formProps('chegada')}
                label="Endereço de chegada"
                placeholder="Informe o endereço destino"
            />
             <FormField
            {...formProps('comments')}
                label="Comentarios "
                placeholder="Coloque aqui detalhes da carona"
                as='textarea'
            />
            <div className='d-grid d-md-block'>
                <CustomButton
                type="submit"
                loading={formik.isSubmitting || formik.isValidating}
                disabled={formik.isSubmitting || formik.isValidating}
                >Calcular preço
                </CustomButton>
            </div>
        </Form>
    )
}
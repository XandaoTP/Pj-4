import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { AutoCompleteGoogleField } from "../../components/autocompletefield";
import { CustomButton } from "../../components/custombutton";
import { FormField } from "../../components/formfield";
import { Address } from "../../entities/adress";
import * as yup from 'yup';
import { CreateEstimate, NewEstimate } from "../../services/createestimate";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentEstimate, selectCurrentEstimate, setCurrentEstimate } from "../../store/slices/estimateSlice";

type FormValues = {
    departure: Address | null
    destination: Address | null
    comments: string
}

export function EstimateForm () {
    const dispatch = useDispatch()
    const currentEstimate = useSelector(selectCurrentEstimate)
    const formik = useFormik<FormValues>({
        initialValues: {
            departure: currentEstimate?.departure || null,
            destination: currentEstimate?.destination || null,
            comments: currentEstimate?.comments || ''
        },
        validationSchema: yup.object().shape({
            departure: yup.object()
            .typeError('Selecione um endereço.'),
            destination: yup.object()
                .typeError('Selecione um endereço.'),
            comments: yup.string().required('informe os detalhes.')         
        }),
        onSubmit: async (values) => {
            const estimate = await CreateEstimate(values as NewEstimate)
            dispatch(setCurrentEstimate(estimate))

        } 
    })
    const formProps = (fieldName: keyof FormValues) => {
        return {
            ...formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`,
            error: formik.errors[fieldName],
            isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
            isValid: formik.touched[fieldName] && !formik.errors[fieldName],
            disabled: !!currentEstimate
        }

    }
    const handleChangeAddress = () => {
        dispatch(clearCurrentEstimate())
    }
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <AutoCompleteGoogleField
                {...formProps('departure')}
                    label="Endereço de saída"
                    placeholder="Informe o endereço de saída"
                    onChange={(address) => formik.setFieldValue('departure', address)}
                />
                <AutoCompleteGoogleField
                {...formProps('destination')}
                    label="Endereço de chegada"
                    placeholder="Informe o endereço destino"
                    onChange={(address) => formik.setFieldValue('destination', address)}
                />
                <FormField
                {...formProps('comments')}
                    label="Comentarios "
                    placeholder="Coloque aqui detalhes da carona"
                    as='textarea'
                />
                {!currentEstimate && (
                    <div className='d-grid d-md-block'>
                        <CustomButton
                        type="submit"
                        loading={formik.isSubmitting || formik.isValidating}
                        disabled={formik.isSubmitting || formik.isValidating}
                        >Calcular preço
                        </CustomButton>
                    </div>
                )}
            </Form>
                {currentEstimate && (
            <CustomButton
             variant="outline-success"
             type="button"
             onClick={handleChangeAddress}
             className='mb-0 md-md-0 mb-3'
              >
                Alterar endereços
            </CustomButton>
            )}        
        </>    

    )
}
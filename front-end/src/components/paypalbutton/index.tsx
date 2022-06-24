import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { OrderResponseBody } from '@paypal/paypal-js'

type props = {
    value: number
    customId: string
    onSuccess: (details: OrderResponseBody) => Promise<void>
    onError: () => void
}

export function PaypalButton ({ value, customId, onError,  onSuccess }: props) {
    return (
        <PayPalbtnStyled
            createOrder={(data, actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: 'BRL',
                            value: value.toString()
                        },
                        custom_id: customId
                    }],
                    application_context: {
                        brand_name: 'Eco taxi',
                        shipping_preference:'NO_SHIPPING'
                    }
                })
            }}
            onApprove={ async (data, actions) => {
                if(actions.order){
                const details = await actions.order.capture()
               onSuccess(details)
               }
            }}
            onError={onError}
            style={{
                color:'black',
                layout: 'horizontal',
                tagline: false,
                height: 30
            }}        
        />
    )
}

const PayPalbtnStyled = styled(PayPalButtons)`
  .paypal-buttons {
    display: block !important;
  }
`
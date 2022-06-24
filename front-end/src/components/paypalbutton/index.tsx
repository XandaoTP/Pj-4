import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";
import { OrderResponseBody } from '@paypal/paypal-js'

type props = {
    value: number
    onSuccess: (details: OrderResponseBody) => Promise<void>
}

export function PaypalButton ({ value, onSuccess }: props) {
    return (
        <PayPalbtnStyled
            createOrder={(data, actions) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        amount: {
                            currency_code: 'BRL',
                            value: value.toString()
                        }
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
import { OrderResponseBody } from "@paypal/paypal-js";
import { useSelector } from "react-redux";
import { PaypalButton } from "../../components/paypalbutton";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";

export function PaypalFinish () {
    const currentEstimate = useSelector(selectCurrentEstimate)
    if(!currentEstimate) {
        return null
    }
    const handlePayPalSuccess = async (detais: OrderResponseBody) => {
        

    }
    return (
        <div>
         <PaypalButton
           value={currentEstimate.value}
           onSuccess={handlePayPalSuccess} 
        />
        </div>
    )
}
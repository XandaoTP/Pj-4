import { OrderResponseBody } from "@paypal/paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PaypalButton } from "../../components/paypalbutton";
import { CreateRide } from "../../services/createride";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";
import { selectUser } from "../../store/slices/userSlice";

export function PaypalFinish () {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)
    if(!currentEstimate || !user) {
        return null
    }
    const handlePayPalSuccess = async (details: OrderResponseBody) => {
        try {
            CreateRide({
                estimate: currentEstimate,
                gatwayId: details.id,
                userId: user?.id
            })
        } catch {
            toast.error('Falha ao processar seu pagamento.')
        }
    }
    const handlePayPalError = () => {
        toast.error('ocorreu um erro ao realizar pagamento. Tente novamente em alguns sengundos.')
    }
    return (
        <div>
         <PaypalButton
           value={currentEstimate.value}
           onSuccess={handlePayPalSuccess}
           customId={currentEstimate.id}
           onError={handlePayPalError}
        />
        </div>
    )
}
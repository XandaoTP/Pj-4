import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectHasCurrentEstimate } from "../../store/slices/estimateSlice"
import { Loading } from "../loading"

type Props= {
    children: JSX.Element
}

export function EstimateRoute ({ children }: Props) {
    const estimateroute = useSelector(selectHasCurrentEstimate)
    if(estimateroute) {
        return children
    }
    if (!estimateroute) {
        return <Navigate to='/novacarona' />
    }
    return <Loading />
}
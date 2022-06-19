import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectLoadingUser, selectUserLoggedIn } from "../../store/slices/userSlice"
import { Loading } from "../loading"

type Props= {
    children: JSX.Element
}

export function PrivateRoute ({ children }: Props) {
    const isUserLoggedIn = useSelector(selectUserLoggedIn)
    const isLoadingUser =  useSelector(selectLoadingUser)
    if(isLoadingUser) {
        return <Loading />
    }
    if (!isUserLoggedIn) {
        return <Navigate to='/login' />
    }
    return children
}
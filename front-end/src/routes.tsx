import { Route, Routes as RDroutes } from "react-router-dom";
import { Home } from "./views/home";
import { Error404 } from "./views/notefoundpage";
import { SignInView } from "./views/signin";

export function Routes () {
    return (
        <RDroutes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error404 />} />
            <Route path='/signin' element={<SignInView />} />
        </RDroutes>
    )
}
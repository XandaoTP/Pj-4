import { Route, Routes as RDroutes } from "react-router-dom";
import { PublicOnlyRoute } from "./components/publiconlyroute";
import { Home } from "./views/home";
import { NewRideView } from "./views/newride";
import { Error404 } from "./views/notefoundpage";
import { SignInView } from "./views/signin";

export function Routes () {
    return (
        <RDroutes>
            <Route path='/' element={<Home />} />
            <Route path='/novacarona' element={<NewRideView />} />
            <Route path='*' element={<Error404 />} />
            <Route 
            path='/signin' 
            element= {<PublicOnlyRoute>
                        <SignInView />
                      </PublicOnlyRoute>}
            />
        </RDroutes>
    )
}
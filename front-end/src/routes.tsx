import { Route, Routes as RDroutes } from "react-router-dom";
import { EstimateRoute } from "./components/estimateroute";
import { PrivateRoute } from "./components/privateroute";
import { PublicOnlyRoute } from "./components/publiconlyroute";
import { Home } from "./views/home";
import { LoginView } from "./views/login";
import { NewRideView } from "./views/newride";
import { Error404 } from "./views/notefoundpage";
import { SuccessView } from "./views/Ridesuccess";
import { SignInView } from "./views/signin";

export function Routes () {
    return (
        <RDroutes>
            <Route path='/' element={<Home getvaluedarkmode={""} />} />
            <Route 
            path='/novacarona' 
            element={<PrivateRoute>
                        <NewRideView />
                     </PrivateRoute>
                }
            />
            <Route path='*' element={<Error404 />} />
            <Route 
            path='/signin' 
            element= {<PublicOnlyRoute>
                        <SignInView />
                      </PublicOnlyRoute>}
            />
            <Route 
            path='/login' 
            element= {<PublicOnlyRoute>
                        <LoginView />
                      </PublicOnlyRoute>}
            />
            <Route 
            path='/sucesso' 
            element= {<PrivateRoute>
                        <SuccessView />
                      </PrivateRoute>}
            />
        </RDroutes>
    )
}
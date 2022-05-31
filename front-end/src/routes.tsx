import { Route, Routes as RDroutes } from "react-router-dom";
import { Home } from "./views/home";

export function Routes () {
    return (
        <RDroutes>
            <Route path="/" element={<Home />} />
        </RDroutes>
    )
}
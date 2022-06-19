import { useLoadScript } from "@react-google-maps/api";
import { Alert, Spinner } from "react-bootstrap";

const libraries: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[] = ['places']

type Props = {
    children: JSX.Element
}
export function LoadGoogleScript ( {children }: Props) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyALlCd2X12quqEOjlH2Dqj98vIMvuWVxAQ',
        libraries
    })
    if(loadError) {
        return <Alert variant="danger">Falha ao carregar o google. Recarrega a página.</Alert>
    }
    if(!isLoaded) {
        return <Spinner animation="grow" variant="success" >
        <span className="visually-hidden">Carregando...</span>
        </Spinner>
    }
    return children
}
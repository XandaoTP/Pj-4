import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectHasCurrentEstimate } from "../../store/slices/estimateSlice"
import { EstimateMap } from "./estimatemap"


export function EstimateDetails () {
    const hasCurrentEstimate = useSelector(selectHasCurrentEstimate)
    if(!hasCurrentEstimate) {
    return (
        <SquareNoEstimate className="d-none d-md-flex">
            <p className="mb-0">Preencha o formulario ao lado para ver os dados</p>
        </SquareNoEstimate>
    )
}
return (
    <>
    <EstimateMap />
    </>
 )
}

const SquareNoEstimate = styled.div`
 background-color: #e8ffe3 ;
 height: 100%;
 border: 1px dotted;
 border-radius: 15px;
 align-items: center;
 justify-content: center;
 padding: 0 50px;
`
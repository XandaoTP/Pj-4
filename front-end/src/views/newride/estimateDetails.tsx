import styled from "styled-components"

export function EstimateDetails () {
    return (
        <SquareNoEstimate className="d-none d-md-flex">
            <p className="mb-0">Preencha o formulario ao lado para ver os dados</p>
        </SquareNoEstimate>
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
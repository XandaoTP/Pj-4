import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectCurrentEstimate } from "../../store/slices/estimateSlice"

export function EstimateData () {
    const estimateData = useSelector(selectCurrentEstimate)
    if (!estimateData) {
        return null
    }
    return (
        <EstimateDivStyled>
            <DataStyled><span>Tempo</span>{estimateData.minutes}min</DataStyled>
            <DataStyled><span>Distancia</span>{(estimateData.meters /1000).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}Km</DataStyled>
            <DataStyled><span>Distancia</span>{(estimateData.value).toLocaleString('pt-br',{currency: 'BRL', style: 'currency'})}</DataStyled>
        </EstimateDivStyled>
    )
}

const EstimateDivStyled = styled.div`
display: flex;
  background: #b9f2c2 ;
  padding: 12px;
  justify-content: space-between;
`

const DataStyled = styled.p`
    margin: 0;
    span {
        display: block;
    }
`
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Riders } from "../../entities/riders";
import { CustomText } from "../customtext";

type Props = {
    rides: Riders
    comments?: boolean
}

export function RideCardDetails ({ rides, comments = false }: Props ) {
    const friendlyId = `${rides.friendlyId.substring(0, 3)}-${rides.friendlyId.substring(5)}`
    return (
        <>
            <IdStyle>#{friendlyId}</IdStyle>
            <CardTextStyled><CustomText bold>Partida:</CustomText> {rides.departure.address}</CardTextStyled>
            <CardTextStyled><CustomText bold>Destino:</CustomText> {rides.destination.address}</CardTextStyled>
            {comments && (
        <>
          <CardTextStyled bold>Observações:</CardTextStyled>
          <CardTextStyled>{rides.comments}</CardTextStyled>
        </>
      )}
      <NumberDetailsView>
        <View>
            <NumberStyled>Duraçao percurso</NumberStyled>
            <NumberStyled>{rides.minutes}Min</NumberStyled>
        </View>
        <View>
            <NumberStyled>Distancia</NumberStyled>
            <NumberStyled>{(rides.meters / 1000).toFixed(2).replace('.', ',')}
            km</NumberStyled>
        </View>
        <View>
            <NumberStyled>Valor de ajuda</NumberStyled>
            <NumberStyled>R$ {rides.partnerValue.toFixed(2).replace('.', ',')}
            </NumberStyled>
        </View>
      </NumberDetailsView>
        </>
    )
}

const CardTextStyled = styled(CustomText)`
    font-size: 12px;
`
const IdStyle = styled(CustomText)`
    margin-bottom: 0px;
`
const NumberDetailsView = styled.View`
    border-top-width: 2px ;
    margin-top: 8px;
    flex-direction: row;
    justify-content: space-around;
`
const NumberStyled = styled(CustomText)`
    font-size: 12px;
    text-align: center;
    color: #288325;
    font-weight: bold;
  `
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import styled from "styled-components/native";
import { Riders } from "../../entities/riders";
import { RideCardDetails } from "../ridesCardDetails";
import { RidesModal } from "../ridesModal";

type Props  = {
    rides: Riders
}

export function RidesCards ({ rides }: Props) {
    const [visible, SetVisible] = useState(false)
    return (
        <>
        <BorderStyled onPress={() => SetVisible(true)}>
            <InfoRidesStyled>
                <RideCardDetails rides={rides} />
            </InfoRidesStyled>
            <IconStyled icon={faArrowAltCircleRight} size={20}/>
        </BorderStyled>
        <RidesModal rides={rides} visible={visible} onRequestClose={() => SetVisible(false)} />
        </>
    )
}

const BorderStyled = styled.TouchableOpacity`
    border : 1px solid #108907;
    border-radius: 16px;
    padding: 12px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
`
const IconStyled = styled(FontAwesomeIcon)`
    color: #108907; 
`
const InfoRidesStyled = styled.View`
    flex: 1;
    padding-right: 5px;
`
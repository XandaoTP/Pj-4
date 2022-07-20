import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleRight";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { CustomText } from "../customtext";

type Props = {
    children: React.ReactNode
} & TouchableOpacityProps

export function ModalActionButton ({children, ... otherProps}: Props) {
    return (
        <TouchableStyled {...otherProps}>
            <CustomText>{children}</CustomText>
            <IconStyled icon={faArrowAltCircleRight} size={20}/>
        </TouchableStyled>
    )
}

const TouchableStyled = styled(TouchableOpacity)`
        flex-direction: row;
        justify-content: space-between;
        border-top-color: #000 ;
        border-top-width: 2px;
        margin-top: 5px;
        padding-top: 5px;
        padding-bottom: 2px;
        ${props => props.disabled &&`
            background-color: #ffffff;
            opacity: 0.3;
        `}
`
const IconStyled = styled(FontAwesomeIcon)`
    color: #108907;    
`
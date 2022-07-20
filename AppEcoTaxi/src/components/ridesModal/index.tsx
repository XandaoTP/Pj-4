import React from 'react'
import { Modal } from 'react-native'
import {RideCardDetails} from '../ridesCardDetails'
import {Riders} from '../../entities/riders'
import styled from 'styled-components/native'
import { ModalActionButton } from './buttonmodal'
import { RidersStatus } from '../../entities/ridersStatus'

type Props = {
    rides: Riders
    visible: boolean
    onRequestClose: () => void
}

export function RidesModal ({rides, visible , onRequestClose}: Props) {
    return (
       <Modal visible={visible} onRequestClose={onRequestClose} transparent>
        <ViewModalStyle>
            <BackdropStyled onPress={onRequestClose}/>
            <ContentModalStyled>
                <RideCardDetails rides={rides}  />
                <ViewButtonBoxStyled>
                    {rides.state === RidersStatus.CREATED && (
                        <ModalActionButton>Aceitar</ModalActionButton>
                    )}
                    {rides.state === RidersStatus.ACCEPTED && (
                        <>
                        <ModalActionButton>Traçar rota destino</ModalActionButton>
                        <ModalActionButton>Traçar rota para chegada</ModalActionButton>
                        <ModalActionButton>Finalizar</ModalActionButton>
                        <ModalActionButton>Cancelar</ModalActionButton>
                        </>
                    )}
                </ViewButtonBoxStyled>
            </ContentModalStyled>
            </ViewModalStyle>
       </Modal> 
    )
}

const ViewModalStyle = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const BackdropStyled = styled.TouchableOpacity`
    position: absolute;
    background-color: rgba(5, 80, 29, 0.2);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const ContentModalStyled = styled.View`
background-color: #ffffff;
padding: 20px;
margin: 0 15px;
border-radius: 15px;
`
const ViewButtonBoxStyled = styled.View`

`
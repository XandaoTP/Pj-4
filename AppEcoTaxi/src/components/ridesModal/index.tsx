import React, { useState } from 'react'
import { Modal } from 'react-native'
import {RideCardDetails} from '../ridesCardDetails'
import {Riders} from '../../entities/riders'
import styled from 'styled-components/native'
import { ModalActionButton } from './buttonmodal'
import { RidersStatus } from '../../entities/ridersStatus'
import { ActionsType, ExecuteButtonModalAction } from '../../services/executeActionButtonModal'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/slices/userSlice'
import Toast from 'react-native-toast-message'
import { useAppDispatch } from '../../store/store'
import { loadRiders } from '../../store/slices/ridersSlice'
import {openMap} from '../../services/openmap'

type Props = {
    rides: Riders
    visible: boolean
    onRequestClose: () => void
}

export function RidesModal ({rides, visible , onRequestClose}: Props) {
    const attDispatch = useAppDispatch()
    const user = useSelector(selectUser)
    const userId = user?.id || ''
    const [loading, setLoading] = useState(false)
    const handleExecuteActionButton = async (action: ActionsType) => {
        try {
            setLoading(true)
            await ExecuteButtonModalAction({
                rideId: rides.id,
                userId: userId,
                action,
            })
            Toast.show({
                type: 'success',
                text1: 'Pedido atualizado.'
            })
            attDispatch(loadRiders(userId))
        } catch {
            Toast.show({
                type: 'error',
                text1: 'Desculpe. Algo não saiu como o esperado :(. Por Favor, tente novamente.'
            })
        }
        setLoading(false)
    }
    const handleCloseModal = () => {
        if (!loading) {
          onRequestClose();
        }
    }
    return (
       <Modal visible={visible} onRequestClose={handleCloseModal} transparent>
        <ViewModalStyle>
            <BackdropStyled onPress={handleCloseModal} disabled={loading}/>
            <ContentModalStyled>
                <RideCardDetails rides={rides} comments/>
                {loading && <LoadingModalView />}
                <ViewButtonBoxStyled>
                    {rides.state === RidersStatus.CREATED && (
                        <ModalActionButton
                         onPress={() => handleExecuteActionButton(ActionsType.accept)} disabled={loading}>Aceitar</ModalActionButton>
                    )}
                    {rides.state === RidersStatus.ACCEPTED && (
                        <>
                        <ModalActionButton onPress={() => openMap(rides.departure)} disabled={loading}>Traçar rota destino</ModalActionButton>
                        <ModalActionButton onPress={() => openMap(rides.destination)} disabled={loading}>Traçar rota para chegada</ModalActionButton>
                        <ModalActionButton onPress={() => handleExecuteActionButton(ActionsType.finish)} disabled={loading}>Finalizar</ModalActionButton>
                        <ModalActionButton onPress={() => handleExecuteActionButton(ActionsType.cancel)} disabled={loading}>Cancelar</ModalActionButton>
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
    padding-top: 2px;
`

const LoadingModalView = styled.ActivityIndicator`
    margin-top: 15px;
`
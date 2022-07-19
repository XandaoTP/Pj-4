import React from "react"
import { StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { LoadingStatus } from "../../entities/loadingStatus"
import { Riders } from "../../entities/riders"
import { LoadingRidesStatus } from "../../store/slices/ridersSlice"
import { Container } from "../Container"
import { CustomAlert } from "../CustomAlert"
import { CustomText } from "../customtext"
import { Loading } from "../loading"
import { RidesCards } from "../rides"

type Props = {
    riders: Riders[]
    NoRidersMessage: string 

}

export function RidersList ({ riders, NoRidersMessage }: Props) {
    const { status } = useSelector(LoadingRidesStatus)
    if(status === LoadingStatus.loading) {
        return <Loading />
    }
    if(status === LoadingStatus.failed) {
        return (
        <Container>
            <CustomAlert>Falha ao buscar dados</CustomAlert>
        </Container>
        )
    }
    return (
        <Container padding>
            {riders.length > 0 ? (
            <>
            {riders.map(rider => (
            <RidesCards key={rider.id} rides={rider} />
            ))}
            </>
            ) : (
                <CustomText style={styles.noRider}>{NoRidersMessage}</CustomText>
            )}    
            </Container>
    )
}

const styles = StyleSheet.create({
    noRider: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: '50%',
    }
})
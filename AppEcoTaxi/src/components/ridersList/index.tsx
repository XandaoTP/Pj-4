import React from "react"
import { StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import { LoadingStatus } from "../../entities/loadingStatus"
import { Riders } from "../../entities/riders"
import { LoadingRidesStatus } from "../../store/slices/ridersSlice"
import { Container } from "../Container"
import { CustomText } from "../customtext"
import { Loading } from "../loading"

type Props = {
    riders: Riders[]
    NoRidersMessage: string 

}

export function RidersList ({ riders, NoRidersMessage }: Props) {
    const { status } = useSelector(LoadingRidesStatus)
    if(status === LoadingStatus.loading) {
        return <Loading />
    }
    return (
        <Container>
            {riders.length > 0 ? (
            <>
            {riders.map(rider => (
            <CustomText key={rider.id}>{rider.friendlyId}</CustomText>
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
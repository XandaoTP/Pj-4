import React from "react"
import { StyleSheet } from "react-native"
import { Riders } from "../../entities/riders"
import { Container } from "../Container"
import { CustomText } from "../customtext"

type Props = {
    riders: Riders[]
    NoRidersMessage: string 

}

export function RidersList ({ riders, NoRidersMessage }: Props) {
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
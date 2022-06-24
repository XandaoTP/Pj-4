import { Data } from "@react-google-maps/api"
import { addDoc, collection } from "firebase/firestore"
import { Estimate } from "../entities/estimate"
import { db } from "./firebase"

type NewRide = {
    estimate: Estimate
    gatwayId: string
    userId: string

}

export const CreateRide = async ({ estimate, gatwayId, userId }: NewRide): Promise<void> => {
    const friendlyId = new Date().getTime().toString(36).toUpperCase()
    const partnerValue = parseFloat((estimate.value = 0.85).toFixed(2))
    const { id: estimateId, ...estimateData } = estimate
    const newRideData = {
        ...estimateData,
        estimateId,
        gatwayId,
        user: userId,
        friendlyId,
        partnerValue,
        state: 'CREATED',
        createdAt: new Date()
    }
    await addDoc(collection(db, 'rides'), newRideData)
}
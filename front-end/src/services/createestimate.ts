import { addDoc, collection } from "firebase/firestore"
import { Address } from "../entities/adress"
import { Estimate } from "../entities/estimate"
import { calculateDistance } from "./calculateDistance"
import { db } from "./firebase"

export type NewEstimate = {
    departure: Address
    destination: Address
    comments: string
}

export const CreateEstimate = async ({departure, destination, comments}: NewEstimate): Promise<Estimate> => {
    const { duration, distance: meters } = await calculateDistance({
        origin: departure,
        destination: destination
    })
    const minutes = Math.floor(duration / 60)
    const value = getValue(meters, minutes )
    const estimateData = {
        minutes,
        meters,
        value,
        departure,
        destination,
        comments,
    }
    const res = await addDoc(collection(db, 'estimates'), estimateData)
    return {
      id: res.id,
      ...estimateData
    } 
}

const getValue = (meters: number, minutes: number) => {
    let value = 1.5
    value += minutes * 0.25
    value += meters * 0.001
    const min = 4.5
    if(value < min) {
        return min 
    }
    return parseFloat(value.toFixed(2))
} 
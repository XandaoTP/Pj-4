import { Address } from "./adress"
import { RidersStatus } from "./ridersStatus"

export type Riders = {
    id: string
    minutes: number
    meters: number
    value: number
    departure: Address
    destination: Address
    comments: string
    user: string
    friendlyId: string
    partnerValue: number
    state: RidersStatus
    createdAt: string
}
import { Address } from "./adress"

export type Estimate = {
    id: string
    minutes: number
    meters: number
    value: number
    departure: Address
    destination: Address
    comments: string
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Estimate } from "../../entities/estimate"
import { AllReducerState } from "../store"

type estimateState = {
    currentEstimate: Estimate | null
}

const initialState: estimateState = {
    currentEstimate: null
}

const slice = createSlice({
    name: 'estimate',
    initialState,
    reducers: {
        setCurrentEstimate: (state, action: PayloadAction<Estimate>) => {
            state.currentEstimate = action.payload
        },
        clearCurrentEstimate: (state) => initialState
    }
})
export const { setCurrentEstimate, clearCurrentEstimate } = slice.actions

export default slice.reducer

export const selectCurrentEstimate = (state: AllReducerState) => state.estimateData.currentEstimate
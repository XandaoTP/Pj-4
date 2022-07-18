import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit"
import { StatusBar } from "react-native"
import { LoadingStatus } from "../../entities/loadingStatus"
import { Riders } from "../../entities/riders"
import { RidersStatus } from "../../entities/ridersStatus"
import { getRiders } from "../../services/getRiders"
import { AllReducerState } from "../store"

export const loadRiders = createAsyncThunk(
    'riders/loadRiders',
    async (userId: string) => {
      const riders = await getRiders(userId)
      return riders
    }
)

type RiderState = {
    rider: Riders[]
    status: LoadingStatus
    error: SerializedError | null
}

const initialState: RiderState = {
    rider: [],
    status: LoadingStatus.idle,
    error: null, 
}

const slice = createSlice({
    name: 'riders',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(loadRiders.pending, state => {
            state.status = LoadingStatus.loading
            state.error = null
        })
        builder.addCase(loadRiders.fulfilled, (state, action) => {
          state.rider = action.payload  
          state.status = LoadingStatus.succeeded
        })
        builder.addCase(loadRiders.rejected, (state, action) => { 
          state.status = LoadingStatus.failed
          state.error = action.error
        })
    }
})

export default slice.reducer;

export const SelectOpenRiders = (state: AllReducerState) => state.Riders.rider.filter(rider => rider.state === RidersStatus.CREATED)
export const SelectAcceeptedRiders = (state: AllReducerState) => state.Riders.rider.filter(rider => rider.state === RidersStatus.ACCEPTED)
export const SelectFinishedRiders = (state: AllReducerState) => state.Riders.rider.filter(rider => rider.state === RidersStatus.FINISHED)

export const LoadingRidesStatus = (state: AllReducerState) => ({
  status: state.Riders.status,
  error: state.Riders.error
 })


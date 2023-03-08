import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const initialActivityState = {
    activities: []
}
export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: initialActivityState,

    reducers: {
        initiate: (state, action: PayloadAction<undefined>) => {
           
            state.activities= []
           
        },
        success: (state, action: PayloadAction<[]>) => {
            state.activities = action.payload
        },
        failure: (state, action: PayloadAction<string>) => {

            state.activities = []
        }
    }
})
export const { initiate: initiateActionCreator, success: successActionCreator, failure: failureActionCreator } =activitiesSlice.actions

export const allActivitiesReducer = activitiesSlice.reducer
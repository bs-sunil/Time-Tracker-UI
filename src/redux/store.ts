
import { configureStore } from "@reduxjs/toolkit"
import { allActivitiesReducer } from "./activities/activities";
import {  allMembersReducer } from "./feature-name/featurenameSlice";

const store = configureStore({
    reducer: {
        allActivities: allActivitiesReducer,
         allMember:allMembersReducer
    }
})


export default store;

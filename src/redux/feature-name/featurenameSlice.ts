import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: '',

    reducers: {
    }
})



export const initialMemberState = {
    Name: "",
    
}
export const MemberSlice = createSlice({
    name: 'Members',
    initialState: initialMemberState,

    reducers: {
        initiate: (state, action: PayloadAction<undefined>) => {
           
            state. Name=""
            
           
        },
        Sname: (state, action: PayloadAction<string>) => {
           
            state.Name=action.payload
           
        },
        // Seffort: (state, action: PayloadAction<number>) => {
           
            // state.Effort=action.payload
                
            
        // }
    }
})


export const { initiate: initiateMemberActionCreator, Sname: successMemberActionCreator } =MemberSlice.actions

export const allMembersReducer = MemberSlice.reducer


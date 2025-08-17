import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        languageselected: "en",
    },
    reducers: {
        addlanguagechoice: (state,action) => {
            state.languageselected = action.payload;
        }
    }
});

export const { addlanguagechoice } = configSlice.actions;

export default configSlice.reducer;
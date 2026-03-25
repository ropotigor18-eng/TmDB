import {createSlice, type UnknownAction} from "@reduxjs/toolkit";

type ProgressState = {
    pendingCount: number;
};

const initialState: ProgressState = {
    pendingCount: 0,
};

const isPendingAction = (action: UnknownAction) => action.type.endsWith("/pending");
const isFulfilledAction = (action: UnknownAction) => action.type.endsWith("/fulfilled");
const isRejectedAction = (action: UnknownAction) => action.type.endsWith("/rejected");

const progressSlice = createSlice({
    name: "progress",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(isPendingAction, (state) => {
                state.pendingCount += 1;
            })
            .addMatcher(isFulfilledAction, (state) => {
                state.pendingCount = Math.max(0, state.pendingCount - 1);
            })
            .addMatcher(isRejectedAction, (state) => {
                state.pendingCount = Math.max(0, state.pendingCount - 1);
            });
    },
});

export const progressReducer = progressSlice.reducer;

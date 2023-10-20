import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./type";

const selectSelf = (state: RootState) => state;

//export const sampleSelector = createSelector(selectSelf, (state) => state?.test);
// export const sampleSelector = createSelector(selectSelf, (state) => ({
//   isAuthenticated: state
// }));
export const sampleSelector = createSelector(selectSelf, (state) => state.test);

export const authenticated = createSelector(selectSelf, (state) => state.test.isAuthenticated);

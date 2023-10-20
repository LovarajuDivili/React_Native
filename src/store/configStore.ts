import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./slices/Sample/DataSlice";

const store = configureStore({
  reducer: {
    test: DataSlice.reducer,
  },
});

export default store;

store.subscribe(() => {
  console.log("state Data", store.getState());
});

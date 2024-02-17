// configure the store
import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../feature/people/peopleSlice";
const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
export default store;

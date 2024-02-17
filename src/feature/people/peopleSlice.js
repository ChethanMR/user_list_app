// creating slices
import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";
const initialState = data;
const peopleSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    deletePerson: (state, action) => {
      let { id } = action.payload;
      let filteredList = state.filter((person) => person.id !== id);
      return filteredList;
    },
    updatePerson: (state, action) => {
      // console.log(action.payload);
      const { id, name, email } = action.payload;
      // console.log(id, name, email);
      let person = state.find((person) => person.id == id);
      // console.log(person);
      person.id = Number(id);
      person.name = name;
      person.email = email;
    },
  },
});
export const { addPerson, deletePerson, updatePerson } = peopleSlice.actions;
export default peopleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export let slicev = createSlice({
  name: "data",

  initialState: {

 user: ['arun','selvam']
},

  reducers: {
    useraction: (state , action) => {
      state.user = action.payload;

      console.log(action.payload);
      // console.log(state, "stae");
    },
  },
});
export const { useraction } = slicev.actions;
export default slicev.reducer;
// console.log(slicev.reducer); 
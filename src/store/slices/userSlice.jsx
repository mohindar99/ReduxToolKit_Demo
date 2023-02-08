import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      //console.log(action.payload);
      state.push(action.payload);
    },
    removeUser(state, action) {
     // console.log("hiii" + action.payload);
      state.splice(action.payload,1);


    },
    deleteUsers(state, action) {},
  },
});

console.log(userSlice.actions);

export { userSlice };
  
export const { addUser,removeUser } = userSlice.actions;
 
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  user:"",
  loading:"",
  error:"",
  token:"",
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
})

export const {} = authSlice.actions
export default authSlice.reducer

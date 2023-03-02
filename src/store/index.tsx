import { configureStore, createSlice } from '@reduxjs/toolkit';

export type UserState = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
}

const usersSlice = createSlice({
  name: 'user',
  initialState: Array<UserState>,
  reducers: {
    addUser(state, action){
      state.push(action.payload);
    }
  }
})

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer
  }
})

export const { addUser } = usersSlice.actions;
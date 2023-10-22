import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const StorageUser = localStorage.getItem('userData');
  if (StorageUser) {
    const user = JSON.parse(StorageUser);
    return {
      isConnected: true,
      user
    }
  }

  return {
    isConnected: false,
    user: null
  }
}

const userReducer = createSlice({
  name: "user",
  initialState: initialState(),
  reducers: {
    login: {
      reducer: (state, action) => {
        localStorage.setItem('userData', JSON.stringify(action.payload.user));
        state.isConnected = action.payload.isConnected;
        state.user = action.payload.user;
      },
      prepare: (user) => {
        return {
          payload: {
            isConnected: true,
            user: user
          }
        }
      }
    },
    logout: (state) => {
      localStorage.removeItem('userData');
      console.log("hello");
      state = {
        isConnected: false,
        user: null
      }
      return state;
    },
    edit: {
      reducer: (state, action) => {
        localStorage.setItem('userData', JSON.stringify(action.payload.user));
        state.isConnected = action.payload.isConnected
        state.user = action.payload.user
      },
      prepare: (user) => {
        return {
          payload: {
            isConnected: true,
            user: user
          }
        }
      }
    }
  }
})


export const {login, logout, edit} = userReducer.actions
export default userReducer.reducer
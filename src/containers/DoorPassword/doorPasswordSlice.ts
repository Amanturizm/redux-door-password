import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DOOR_PASSWORD} from "../../constants";

interface DoorPasswordState {
  value: string;
  message: string;
}

const initialState: DoorPasswordState = {
  value: '',
  message: ''
};

export const doorPasswordSlice = createSlice({
  name: 'door-password',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) state.value += action.payload;
    },
    removeValue: (state) => {
      state.value = state.value.slice(0, -1);
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    passwordCheck: (state) => {
      state.message = state.value === DOOR_PASSWORD ? 'Access Granted' : 'Access Denied';
    }
  },
});

export const doorPasswordReducer = doorPasswordSlice.reducer;
export const { setValue, removeValue, setMessage, passwordCheck } = doorPasswordSlice.actions;

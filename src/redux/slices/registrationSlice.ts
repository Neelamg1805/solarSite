import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationData } from '../../types/user';

interface RegistrationState {
  data: Partial<RegistrationData>;
  step: number;
  isComplete: boolean;
}

const initialState: RegistrationState = {
  data: {},
  step: 1,
  isComplete: false,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegistrationData: (state, action: PayloadAction<Partial<RegistrationData>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },
    resetRegistration: (state) => {
      state.data = {};
      state.step = 1;
      state.isComplete = false;
    },
    setComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
  },
});

export const {
  setRegistrationData,
  setStep,
  nextStep,
  previousStep,
  resetRegistration,
  setComplete,
} = registrationSlice.actions;

export default registrationSlice.reducer;


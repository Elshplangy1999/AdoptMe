import { configureStore } from '@reduxjs/toolkit';
// import adoptedPetSlice from "./adoptedPetSlice";
import adoptedPet from '../Components/adoptedPetSlice';
const store = configureStore({
  reducer: {
    adoptedPet,
  },
});
export default store;

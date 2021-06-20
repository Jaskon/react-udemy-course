import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cardsSlice from './cardsSlice';
import userSlice from './userSlice';


const store = configureStore({
  reducer: {
    cards: cardsSlice,
    user: userSlice
  },
  middleware: [
    ...getDefaultMiddleware(),
    () => (next) => (action) => {
      console.log(`Action of type ${action.type} triggered. Payload:`, action.payload);
      next(action);
    }
  ]
});


export default store;

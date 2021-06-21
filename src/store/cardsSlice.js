import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCardList } from '../api/cards.api';


const fetchCards = createAsyncThunk('cards/fetchCards', (state) =>
  getCardList().then(cards => cards)
);


const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    readOnly: true
  },
  reducers: {

    setCards: (state, { payload }) => {
      state.cards = payload
    },

    addCard: (state, { payload }) => {
      state.cards = [payload, ...state.cards]
    },

    removeSelectedCards: state => {
      state.cards = state.cards.filter(card => !card.selected)
    },

    editCard: (state, { payload }) => {
      state.cards = state.cards.map(one => one.id === payload.id ? { ...one, ...payload } : one)
    },

    setReadOnly: (state, { payload }) => {
      state.readOnly = payload;
      // Clear editing status
      state.cards = state.cards.map(card => ({ ...card, editing: false }));
    },

  },
  extraReducers: {
    [fetchCards.fulfilled]: (state, { payload }) => {
      state.cards = payload;
    },
  }
});


export { fetchCards };
export const { setCards, addCard, removeSelectedCards, editCard, setReadOnly } = cardsSlice.actions;
export default cardsSlice.reducer;

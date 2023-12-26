import { createSlice, nanoid } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deletedContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const getContactsValue = state => state.contacts;

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const contactsReduser = contactsSlice.reducer;

export const { addContact, deletedContact } = contactsSlice.actions;

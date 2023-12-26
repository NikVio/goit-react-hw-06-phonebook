import { createSlice, nanoid } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';

const initialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialItems,
  reducers: {
    addContact: {
      reduser(state, action) {
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

console.log(contactsSlice);

export const getContactsValue = state => state.contacts;

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const contactsReduser = contactsSlice.reducer;

export const { addContact, deletedContact } = contactsSlice.actions;

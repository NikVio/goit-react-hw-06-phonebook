import { createSlice, nanoid } from '@reduxjs/toolkit';

//import { nanoid } from 'nanoid';

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
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
      reduser(state, action) {
        return [...state, action.payload];
      },
    },
    deletedContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReduser = contactsSlice.reducer;

export const { addContact, deletedContact } = contactsSlice.actions;

// const contactsInitialState1 = {
//   contacts: initialItems,
// };

//export const addContact = createAction('contacts/addContact');

//export const deletedContact = createAction('contacts/deletedContact');

// export const addContact = newContact => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       ...newContact,
//     },
//   };
// };

// export const deletedContact = id => {
//   return {
//     type: 'contacts/deletedContact',
//     payload: id,
//   };
// };

// export const contactsReduser = createReducer(contactsInitialState, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       return [...state, action.payload];
//     })
//     .addCase(deletedContact, (state, action) => {
//       return state.filter(item => item.id !== action.payload);
//     });
// });

// export const contactsReduser1 = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];

//     case 'contacts/deletedContact':
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };

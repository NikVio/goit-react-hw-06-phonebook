import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const initialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      ...newContact,
    },
  };
};

export const deletedContact = id => {
  return {
    type: 'contacts/deletedContact',
    payload: id,
  };
};

export const filterContact = newContact => {
  return {
    type: 'filters/filterContact',
    payload: newContact,
  };
};

const initialState = {
  contacts: initialItems,

  filters: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/deletedContact':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'filters/filterContact':
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

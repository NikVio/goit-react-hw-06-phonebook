import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { filtersReduser } from './filtersSlice';

import { contactsReduser, persistConfig } from './contactsSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filters: filtersReduser,
});

const persistedReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReduser,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

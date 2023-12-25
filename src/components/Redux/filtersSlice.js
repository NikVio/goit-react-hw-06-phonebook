import { createSlice } from '@reduxjs/toolkit';

//export const filterContact = createAction('filters/filterContact');

export const filtersSlice = createSlice({
  name: 'filters',
  filters: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const filtersReduser = filtersSlice.reducer;

export const { filterContact } = filtersSlice.actions;

// export const filtersReduser = createReducer(filtersInitialState, builder => {
//   builder.addCase(filterContact, (state, action) => {
//     return (state = action.payload);
//   });
// });
// export const filterContact = newContact => {
//   return {
//     type: 'filters/filterContact',
//     payload: newContact,
//   };
// };

// export const filtersReduser1 = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/filterContact':
//       return {
//         state: action.payload,
//       };

//     default:
//       return state;
//   }
// };

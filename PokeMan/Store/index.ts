import {configureStore} from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import pokemanSlice from './pokeman-slice';
import uiStateSlice from './ui-state';

// combining all the reducers
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    pokeMan: pokemanSlice.reducer,
    uiState: uiStateSlice.reducer,
  },
});

export default store;

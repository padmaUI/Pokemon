import {createSlice} from '@reduxjs/toolkit';

import {PokeManListItem} from '../types/types';
import {uiStateActions} from './ui-state';

const initialState: {items: PokeManListItem[]} = {
  items: [],
};

const pokemanSlice = createSlice({
  name: 'pokeman',
  initialState: initialState,
  reducers: {
    updatePokemans(state, action) {
      state.items = action.payload.items;
    },
  },
});

// Thunk funciton to handle, fetching pokeman list from the API
export const fetchPokeMans = () => {
  return async (dispatch: any) => {
    try {
      dispatch(uiStateActions.setIsLoading(true)); //Dispatching action to start loader
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.'); //Throwing error when response is not okay
      }
      let resData = await response.json();
      let data = resData.results;
      dispatch(pokemanSlice.actions.updatePokemans({items: data})); //Dispatching action to store pokeman list items
    } catch (error: any) {
      dispatch(uiStateActions.setIsError(error.message)); //Dispatching action to set error message 
    }
    dispatch(uiStateActions.setIsLoading(false)); //Dispatching action to stop loader
  };
};

export const pokeManActions = pokemanSlice.actions;

export default pokemanSlice;

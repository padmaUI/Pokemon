import {createSlice} from '@reduxjs/toolkit';

const cartInitialState: {items: any[]; totalQuantity: number} = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);
      state.totalQuantity++;
      //   If item already exists we just need to update the quantity, else push new item to array
      if (!existingItem) {
        state.items.push({
          quantity: 1,
          name: newItem.name,
          url: newItem.url,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const name = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      state.totalQuantity--;
      //   if Quantity is 1 then remove the item from the cart list else decrement quantity
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.name !== name);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cardActions = cartSlice.actions;

export default cartSlice;

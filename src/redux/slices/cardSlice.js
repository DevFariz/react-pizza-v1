import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      state.totalCount = state.items.reduce((count, obj) => count + obj.count, 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      
      if(findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      state.totalCount = state.items.reduce((count, obj) => count + obj.count, 0)
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      state.totalCount = state.items.reduce((count, obj) => count + obj.count, 0)
    },
    removeAllProducts(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addProduct, removeProduct, removeAllProducts, minusItem } =
  cardSlice.actions;

export default cardSlice.reducer;

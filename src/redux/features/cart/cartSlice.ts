import { IBook } from "./../../../types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  books: IBook[];
}

const initialState: ICart = {
  books: [],
};

const cartSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

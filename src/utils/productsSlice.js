import { createSlice } from "@reduxjs/toolkit";
import mockProducts from "../mockData.json";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: mockProducts,
    filteredProducts: mockProducts,
    activeCategory: null,
    currentPage: 1,
    productsPerPage: 6,
    color: "#40bfff",
  },
  reducers : {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.currentPage = 1;
      if(action.payload) {
        state.filteredProducts = state.allProducts.filter((p) => p.category === action.payload);
      }
      else {
        state.filteredProducts = state.allProducts;
      }
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    }
  }
});

export const { setCategory, setPage, setColor } = productsSlice.actions;
export default productsSlice.reducer;

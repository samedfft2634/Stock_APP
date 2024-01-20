import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firms: [],
	products: [],
	purchases: [],
	brands: [],
	sales: [],
	categories: [],
	loading: false,
	error: false,
};

const stockSlice = createSlice({
	name: "stock",
	initialState,
	reducers: {
		fetchStart: (state) => {
			state.loading = true;
			state.error = false;
		},
		getStocksSuccess: (state, { payload }) => {
			state[payload.url] = payload.apiData;
			state.loading = false;
			state.error = false;
		},
		getProPurBrandFirmSuccess:(state,{payload})=>{
			state.loading = false;
			state.error = false;
			state.products=payload[0].data
			state.purchases=payload[1].data
			state.brands=payload[2].data
			state.firms=payload[3].data
		},
		getProBraSalesSuccess:(state,{payload})=>{
			state.loading = false;
			state.error = false;
			state.products=payload[0].data
			state.brands=payload[1].data
			state.sales=payload[2].data
		},
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const { fetchStart, fetchFail, getStocksSuccess,getProPurBrandFirmSuccess,getProBraSalesSuccess} = stockSlice.actions;

export default stockSlice.reducer;

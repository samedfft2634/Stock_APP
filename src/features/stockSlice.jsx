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
const updateState = (state,payload,fields)=>{
	state.loading = false
	state.error = false;
	fields.forEach((field,index)=>{
		state[field] = payload[index]
	})
}
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
		getProPurBrandFirmSuccess: (state, { payload }) => {
			updateState(state, payload, ["products", "purchases", "brands", "firms"]);
		},
		getProBraSalesSuccess: (state, { payload }) => {
			updateState(state, payload, ["products", "brands", "sales"]);
		},
		getProBraCatSuccess: (state, { payload }) => {
			updateState(state, payload, ["products", "brands", "categories"]);
		},
		getPurSalesSuccess:(state,{payload})=>{
			updateState(state,payload,["purchases","sales"])
		},
		// getProPurBrandFirmSuccess:(state,{payload})=>{
		// 	state.loading = false;
		// 	state.error = false;
		// 	state.products=payload[0].data
		// 	state.purchases=payload[1].data
		// 	state.brands=payload[2].data
		// 	state.firms=payload[3].data
		// },
		// getProBraSalesSuccess:(state,{payload})=>{
		// 	state.loading = false;
		// 	state.error = false;
		// 	state.products=payload[0].data
		// 	state.brands=payload[1].data
		// 	state.sales=payload[2].data
		// },
		// getProBraCatSuccess:(state,{payload})=>{
		// 	state.loading = false;
		// 	state.error = false;
		// 	state.products=payload[0].data
		// 	state.brands=payload[1].data
		// 	state.categories=payload[2].data
		// },
		fetchFail: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const { fetchStart, fetchFail, getStocksSuccess,getProPurBrandFirmSuccess,getProBraSalesSuccess,getProBraCatSuccess,getPurSalesSuccess} = stockSlice.actions;

export default stockSlice.reducer;

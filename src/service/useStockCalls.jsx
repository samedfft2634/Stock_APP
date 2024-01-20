import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import {
	fetchFail,
	fetchStart,
	getProBraCatSuccess,
	getProBraSalesSuccess,
	getProPurBrandFirmSuccess,
} from "../features/stockSlice";
import { getStocksSuccess } from "../features/stockSlice";

const useStockCalls = () => {
	const dispatch = useDispatch();
	const { axiosWithToken } = useAxios();
    // const getProPurBranFirm = async () => {
    // 	dispatch(fetchStart());
    // 	try {
    // 		const [products, purchases, brands, firms] = await Promise.all([
    // 			axiosWithToken("/products"),
    // 			axiosWithToken("/purchases"),
    // 			axiosWithToken("/brands"),
    // 			axiosWithToken("/firms"),
    // 		]);
    // 		dispatch(
    // 			getProPurBrandFirmSuccess([
    // 				products?.data,
    // 				purchases?.data,
    // 				brands?.data,
    // 				firms?.data,
    // 			])
    // 		);
    // 	} catch (error) {
    // 		dispatch(fetchFail());
    // 		console.log(error);
    // 	}
    // };
    // const getProBraSales = async () => {
    // 	dispatch(fetchStart());
    // 	try {
    // 		const [products,  brands, sales] = await Promise.all([
    // 			axiosWithToken("/products"),
    // 			axiosWithToken("/brands"),
    // 			axiosWithToken("/sales"),
    // 		]);
    // 		dispatch(
    // 			getProBraSalesSuccess([
    // 				products?.data,
    // 				brands?.data,
    // 				sales?.data,
    // 			])
    // 		);
    // 	} catch (error) {
    // 		dispatch(fetchFail());
    // 		console.log(error);
    // 	}
    // };
    // const getProBraCat = async () => {
    // 	dispatch(fetchStart());
    // 	try {
    // 		const [products,  brands, categories] = await Promise.all([
    // 			axiosWithToken("/products"),
    // 			axiosWithToken("/brands"),
    // 			axiosWithToken("/categories"),
    // 		]);
    // 		dispatch(
    // 			getProBraCatSuccess([
    // 				products?.data,
    // 				brands?.data,
    // 				categories?.data,
    // 			])
    // 		);
    // 	} catch (error) {
    // 		dispatch(fetchFail());
    // 		console.log(error);
    // 	}
    // };

	const getStocks = async (url = "firms") => {
		dispatch(fetchStart());
		try {
			const { data } = await axiosWithToken(`/${url}/`);
			const apiData = data.data;
			dispatch(getStocksSuccess({ apiData, url }));
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`${url} process is failed.`);
			console.log(error);
		}
	};


    const fetchData = async(endpoints,successAction)=>{
        dispatch(fetchStart())
        try {
            const data = await Promise.all(
                endpoints.map(endpoint => axiosWithToken(endpoint))
            )
            dispatch(successAction(data.map(response=> response?.data.data)))
        } catch (error) {
            dispatch(fetchFail());
            console.log(error);
        }
    }


	const deleteStock = async (url = "firms", id) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.delete(`/${url}/${id}`);
			toastSuccessNotify(`${url} informations deleted successful.`);
			getStocks(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(
				`${url} informations couldn't deleted, try again!`
			);
			console.log(error);
		}
	};
	const postStock = async (url = "firms", info) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.post(`/${url}/`, info);
			toastSuccessNotify(`${url} has been added! `);
			getStocks(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(
				` An error occurred while adding  a ${url} record!`
			);
		}
	};
	const putStock = async (url = "firms", info) => {
		dispatch(fetchStart());
		try {
			await axiosWithToken.put(`/${url}/${info._id}/`, info);
			toastSuccessNotify(
				`${url.toUpperCase()} has been successfully updated!`
			);
			getStocks(url);
		} catch (error) {
			dispatch(fetchFail());
			toastErrorNotify(`An error occurred during the update`);
		}
	};
	return { getStocks, deleteStock, postStock, putStock, fetchData };
};

export default useStockCalls;

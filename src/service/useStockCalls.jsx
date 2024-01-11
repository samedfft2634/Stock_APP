import { useDispatch } from "react-redux"
import { toastErrorNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"
import { fetchFail, fetchStart } from "../features/authSlice"
import {  getStocksSuccess } from "../features/stockSlice"


const useStockCalls = () => {
    const dispatch = useDispatch()
    const {axiosWithToken} = useAxios()

    const getStocks = async (url="firms")=>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(`/${url}/`)
            const apiData = data.data
            dispatch(getStocksSuccess({ apiData,url}))
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} process is successful.`)
            console.log(error);
        }
    }
  return {getStocks}
}

export default useStockCalls

import { useDispatch } from "react-redux"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
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
            toastErrorNotify(`${url} process is failed.`)
            console.log(error);
        }
    }
    const deleteStock = async (url="firms",id)=>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/${url}/${id}`)
            toastSuccessNotify(`${url} informations deleted successful.`)
            getStocks(url)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} informations couldn't deleted, try again!`)
            console.log(error);
        }
    }
  return {getStocks,deleteStock}
}

export default useStockCalls

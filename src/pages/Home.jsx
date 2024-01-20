import { useEffect } from "react"
import Charts from "../components/Charts"
import KPI from "../components/KPI"
import useStockCalls from "../service/useStockCalls"
import { getPurSalesSuccess } from "../features/stockSlice"

const Home = () => {
  const {fetchData} = useStockCalls()
  useEffect(()=>{
    fetchData(["/purchases", "/sales"], getPurSalesSuccess);
  },[])
  return (
    <>
    <KPI/>
    <Charts />
    </>
  )
}

export default Home
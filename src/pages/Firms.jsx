import Typography  from "@mui/material/Typography"
import Button  from "@mui/material/Button"
import { useEffect } from "react"
import useStockCalls from "../service/useStockCalls"

const Firms = () => {
  const {getStocks} = useStockCalls()
  useEffect(()=>{
  getStocks("firms")
  },[])
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
         Firms
      </Typography>
      <Button variant="contained" color={"success"}>New Firms</Button>
    </div>
  )
}

export default Firms
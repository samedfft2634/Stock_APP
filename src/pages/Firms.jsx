import { useEffect } from "react"
import { useSelector } from "react-redux"
import Typography  from "@mui/material/Typography"
import Button  from "@mui/material/Button"
import Grid  from "@mui/material/Grid"
import useStockCalls from "../service/useStockCalls"
import FirmCard from "../components/FirmCard"

const Firms = () => {
  const {getStocks} = useStockCalls()
  const {firms} = useSelector(state=> state.stock)
  useEffect(()=>{
  getStocks("firms")
  },[])
  
  return (
    <>
      <Typography variant="h4" color={"error"} mb={3}>
         Firms
      </Typography>
      <Button variant="contained" color={"success"}>New Firms</Button>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm)=>(
          <Grid item key={firm._id} >
            <FirmCard {...firm}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Firms
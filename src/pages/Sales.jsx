import { useEffect, useState } from "react"
import useStockCalls from "../service/useStockCalls"
import { Button, Container, Typography } from "@mui/material"
import SaleModal from "../components/SaleModal"
import SaleTable from "../components/SaleTable"
import TableSkeleton, { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg"
import { useSelector } from "react-redux"
import { getProBraSalesSuccess } from "../features/stockSlice"


const Sales = () => {
  const { getStocks,getProBraSales,fetchData } = useStockCalls()
  const { sales, loading, error } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false)
  const initialState = { brandId: "", productId: "", quantity: "", price: "" }
  const [info, setInfo] = useState(initialState)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo(initialState)
  }
  useEffect(() => {
    // getStocks("products")
    // getStocks("brands")
    // getStocks("sales")
    // getProBraSales()
    fetchData(["/products", "/brands", "/sales"], getProBraSalesSuccess);
  }, [])

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="error" mb={3}>
				Sales
			</Typography>
      <Button variant="contained" onClick={handleOpen} color="success">
        New Sale
      </Button>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {error &&  <ErrorMsg />}
      {loading && <TableSkeleton />}
      {!loading && !sales?.length && !error && <NoDataMsg />}
      {!loading && sales?.length > 0 && (
        <SaleTable setInfo={setInfo} handleOpen={handleOpen} />
      )}
    </Container>
  )
}

export default Sales
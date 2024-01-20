import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";
import { ErrorMsg, NoDataMsg } from "../components/DataFetchMsg";
import TableSkeleton from "../components/DataFetchMsg";
import { getProBraCatSuccess } from "../features/stockSlice";

const Products = () => {
	const { products, error, loading } = useSelector((state) => state.stock);
	const { getStocks,getProBraCat,fetchData } = useStockCalls();
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const initialStates = {
		categoryId: "",
		brandId: "",
		name: "",
	};
	const [info, setInfo] = useState(initialStates);
	const handleClose = () => {
		setOpen(false);
		setInfo(initialStates);
	};
	useEffect(() => {
		// getStocks("products");
		// getStocks("categories");
		// getStocks("brands");
		// getProBraCat()
		fetchData(["/products", "/brands", "/categories"], getProBraCatSuccess);
	}, []);
	return (
		<>
			<Typography variant="h4" color="error" mb={3}>
				Products
			</Typography>
			<Button
				variant="contained"
				onClick={handleOpen}
				color="success"
				sx={{ mb: 3 }}
			>
				New Product
			</Button>
			<ProductModal
				open={open}
				handleClose={handleClose}
				setInfo={setInfo}
				info={info}
			/>

			{error && <ErrorMsg />}
			{loading && <TableSkeleton />}
			{!error && !products.length && <NoDataMsg />}
			{!loading && products.length > 0 && !error && <ProductTable />}
		</>
	);
};

export default Products;

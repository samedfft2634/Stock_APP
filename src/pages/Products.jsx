import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
	const { getStocks } = useStockCalls();
	const { products } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const initialStates = {
		name: "",
		phone: "",
		address: "",
		image: "",
	}
	const [info, setInfo] = useState(initialStates);
	const handleClose = () => {
		setOpen(false);
		setInfo(initialStates);
	};
	useEffect(() => {
		getStocks("products");
		getStocks("categories");
		getStocks("brands");
	}, []);
	return (
		<div>
			<Typography variant="h4" color="error" mb={3}>
				Products
			</Typography>
			<Button variant="contained" onClick={handleOpen} color="success" sx={{mb:3}}>
				New Product
			</Button>
			<ProductModal
				open={open}
				handleClose={handleClose}
				setInfo={setInfo}
				info={info}
			/>
      <ProductTable />
		</div>
	);
};

export default Products;

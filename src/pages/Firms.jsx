import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import Grid from "@mui/material/Grid";
import FirmModal from "../components/FirmModal";

const Firms = () => {
	const { getStocks } = useStockCalls();
	const { firms } = useSelector((state) => state.stock);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const [info, setInfo] = useState({
		name: "",
		phone: "",
		address: "",
		image: "",
	});
	const handleClose = () => {
		setOpen(false);
		setInfo({ name: "", phone: "", address: "", image: "" });
	};
	useEffect(() => {
		getStocks("firms");
	}, []);
	return (
		<div>
			<Typography variant="h4" color="error" mb={3}>
				Firms
			</Typography>
			<Button variant="contained" onClick={handleOpen} color="success">
				New Firm
			</Button>
			<FirmModal
				open={open}
				handleClose={handleClose}
				setInfo={setInfo}
				info={info}
			/>
			<Grid container gap={2} mt={3} justifyContent="center">
				{firms?.map((firm) => (
					<Grid item key={firm._id}>
						<FirmCard firm={firm} handleOpen={handleOpen} info={info} setInfo={setInfo}/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Firms;

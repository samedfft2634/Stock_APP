import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { btnStyles } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";

export default function FirmCard({ address, image, name, phone, _id }) {
   const {deleteStock} = useStockCalls()
	return (
		<Card sx={{ maxWidth: 345, display:"flex",flexDirection:"column",alignItems:"center",width:"300px",height:"400px",justifyContent:"space-between",p:2 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{address}
				</Typography>
			</CardContent>
			<CardMedia component="img" alt={name} height="140" image={image} sx={{objectFit:"contain"}} />
			<Typography variant="body2" color="text.secondary">
				{phone}
			</Typography>
			<CardActions >
				<EditNoteIcon  sx={btnStyles} onClick={()=> deleteStock("firms",_id)}/>
				<DeleteOutlineIcon sx={btnStyles} />
			</CardActions>
		</Card>
	);
}

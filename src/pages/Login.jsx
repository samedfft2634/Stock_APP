import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/login.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = () => {
	return (
		<Container maxWidth="lg">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				sx={{ height: "100vh", p: 2 }}
			>
				<Grid item xs={12} mb={3}>
					<Typography variant="h3" color="primary" align="center">
						STOCK APP
					</Typography>
				</Grid>
				<Grid item xs={12} sm={10} md={6}>
					<Avatar
						sx={{
							backgroundColor: "secondary.light",
							m: "auto",
							width: 40,
							height: 40,
						}}
					>
						<LockIcon size="30" sx={{ color: "#A7F205" }} />
					</Avatar>
					<Typography
						variant="h4"
						align="center"
						mb={4}
						color="#3DD980"
					>
						Login
					</Typography>
					<Box
						component="form"
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<TextField
							label="Email"
							name="email"
							id="email"
							type="email"
							variant="filled"
							color="success"
						></TextField>
						<TextField
							label="Password"
							name="password"
							id="password"
							type="password"
							variant="filled"
							color="success"
						/>
						<Button
							variant="contained"
							type="submit"
							color="success"
						>
							Submit
						</Button>
					</Box>
					<Box sx={{ textAlign: "center", mt: 2 }}>
						{/* <Link to="/register">Don't you have an account?</Link> */}
					</Box>
				</Grid>
				<Grid item xs={10} sm={7} md={6}>
					<Container>
						<img src={image} alt="img" />
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;

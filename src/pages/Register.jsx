import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/register.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<Container maxWidth="lg">
			<Grid
				container
				justifyContent="center"
				direction="row-reverse"
				rowSpacing={{ sm: 3 }}
				sx={{
					height: "100vh",
					p: 2,
				}}
			>
				<Grid item xs={12}>
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
						<LockIcon size="30" />
					</Avatar>
					<Typography
						variant="h4"
						align="center"
						mb={2}
						color="secondary.light"
					>
						Register
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
							label="User Name"
							name="username"
							id="userName"
							type="text"
							variant="filled"
							color="warning"
						/>
						<TextField
							label="First Name"
							name="first_name"
							id="firstName"
							type="text"
							variant="filled"
							color="warning"
						/>
						<TextField
							label="Last Name"
							name="last_name"
							id="last_name"
							type="text"
							variant="filled"
							color="warning"
						/>
						<TextField
							label="Email"
							name="email"
							id="email"
							type="email"
							variant="filled"
							color="warning"
						/>
						<TextField
							label="Password"
							name="password"
							id="password"
							type="password"
							variant="filled"
							color="warning"
						/>
						<Button
							type="submit"
							variant="contained"
							size="large"
							color="warning"
						>
							Submit
						</Button>
					</Box>
                    <Box sx={{textAlign:"center",mt:2}}>
                        {/* <Link to="/">Do you have an account?</Link> */}
                    </Box>
				</Grid>
                <Grid item xs={0} sm={7} md={6}>
                    <Container>
                        <img src={image} alt="img" />
                    </Container>
                </Grid>
			</Grid>
		</Container>
	);
};

export default Register;

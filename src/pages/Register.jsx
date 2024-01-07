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
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCall from "../service/useAuthCall";

const Register = () => {
	const {register} = useAuthCall()
	const registerSchema = object({
		email: string()
			.email("Email must be a valid email!")
			.required("Email is a required field!"),
		password: string()
			.required("Password is a required field!")
			.min(8, "Password must be at least 8 characters !")
			.max(16, "Password must be at most 16 characters !")
			.matches(/\d+/, "The password must contain at least one number!")
			.matches(
				/[a-z]/,
				"Password must contains at least one lowercase letter!"
			)
			.matches(
				/[A-Z]/,
				"Password must contains at least one uppercase letter!"
			)
			.matches(
				/[@$!%*?&]+/,
				"Password must contain at least one special character! (@ / $ / ! / % / * / ? / & )"
			),
		username: string().required("Username is a required field!"),
		firstName: string().required("First Name is a required field!"),
		lastName: string().required("Last Name is a required field!"),
	});
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
					<Formik
						initialValues={{
							username: "",
							firstName: "",
							lastName: "",
							email: "",
							password: "",
						}}
						validationSchema={registerSchema}
						onSubmit={(values, actions) => {
							register(values)
							actions.resetForm();
							actions.setSubmitting(false);
						}}
					>
						{({
							handleChange,
							values,
							touched,
							errors,
							handleBlur,
						}) => (
							<Form>
								<Box
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
										value={values.username}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.username && Boolean(errors.username)}
										helperText={touched.username && errors.username  }
									/>
									<TextField
										label="First Name"
										name="firstName"
										id="firstName"
										type="text"
										variant="filled"
										color="warning"
										value={values.firstName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.firstName && Boolean(errors.firstName)}
										helperText={touched.firstName && errors.firstName}
									/>
									<TextField
										label="Last Name"
										name="lastName"
										id="last_name"
										type="text"
										variant="filled"
										color="warning"
										value={values.lastName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.lastName && Boolean(errors.lastName)}
										helperText={touched.lastName  && errors.lastName}
									/>
									<TextField
										label="Email"
										name="email"
										id="email"
										type="email"
										variant="filled"
										color="warning"
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.email && Boolean(errors.email)}
										helperText={touched.email  && errors.email}
									/>
									<TextField
										label="Password"
										name="password"
										id="password"
										type="password"
										variant="filled"
										color="warning"
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
										error={touched.password && Boolean(errors.password)}
										helperText={touched.password  && errors.password}
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
							</Form>
						)}
					</Formik>

					<Box sx={{ textAlign: "center", mt: 2 }}>
						<Link to="/" style={{ textDecoration: "none" }}>
							Do you have an account?
						</Link>
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

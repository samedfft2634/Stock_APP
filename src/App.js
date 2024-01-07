import { blueGrey, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";


function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: grey["900"],
			},
			secondary: {
				main: blueGrey["900"],
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
      <AppRouter />
      <ToastContainer />
		</ThemeProvider>
	);
}

export default App;

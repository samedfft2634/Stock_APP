import { blueGrey, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/Login";

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
			<Login />
		</ThemeProvider>
	);
}

export default App;

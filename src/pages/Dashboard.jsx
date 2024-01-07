import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"

import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector } from "react-redux"


const Dashboard = () => {
    const {user} = useSelector(state => state.auth)
  return (
    <Box sx={{display:"flex"}}>
        <CssBaseline />
        <AppBar position="fixed" sx={{backgroundColor:"#29A5F2"}}>
            <Toolbar>
                <img src="./favicon.png" alt="logo" width="40"  />
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    STOCK APP
                </Typography>
                {user && <Button color="inherit" sx={{display:"flex",gap:1}}>Logout<ExitToAppIcon/></Button>}
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Dashboard
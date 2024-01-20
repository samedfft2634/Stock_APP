// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import LoadingSVG from './LoadingSVG'; 

const NotFound = () => {
  return (
    <Container maxWidth="sm" className="flex justify-center items-center h-screen">
      <Box textAlign="center" color="text.primary">
        <LoadingSVG /> 
        <Typography variant="h4" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Link to="/stock" className="no-underline">
          <Button variant="contained" color="primary" startIcon={<HomeIcon />} className="mt-4">
            Back to Home Page
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;

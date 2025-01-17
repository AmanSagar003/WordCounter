import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';

const MyApp = () => {
  // State to manage the values of the text areas
  const [textArea1, setTextArea1] = useState('');

  // Function to count alphabet characters in a string
  const countAlphabets = (text) => {
    return text.replace(/[^a-zA-Z]/g, '').length;
  };

  // Function to count words in a string
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <div>
      {/* AppBar component for the toolbar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            {/* Empty span for centering */}
            <span style={{ visibility: 'hidden' }}>Hidden Element</span>
            WORD COUNTER
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Box component for padding and margin */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        width="96vw"
        padding={2}
      >

        {/* Grid container for layout */}
          {/* Display alphabet and word count for the first text area */}
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary" marginTop={2}>
              Alphabets: {countAlphabets(textArea1)} | Words: {countWords(textArea1)}
            </Typography>
          </Grid>
          
        {/* Grid container to manage layout of text areas */}
        <Grid container spacing={2} justifyContent="center">
          {/* Grid item for the first text area, taking up 6 out of 12 columns */}
          <Grid item xs={12} md={6} container justifyContent="center">
            <TextField
              label="Text Area 1"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              value={textArea1}
              onChange={(e) => setTextArea1(e.target.value)} // Event handler to update state           
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyApp;

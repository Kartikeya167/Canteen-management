import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FSCard from './FSCard';
import './FirstScreen.css';

function FirstScreen() {
  return (
    <div className="container">
      {/* Background Image */}
      <img src="/homepage.png" alt="Background" className="background-image" />

      <Box className="sectionOne">
        <h1 className="HeadingVal">
          <div className="text1">
            Order <br /> Food <span className="HeadDiffColor">with Ease</span>
          </div>
        </h1>
        <div className="text2">
          Experience the convenience of ordering delicious food online.
        </div>
        <div className="OrderNow">
          <Button
            variant="contained"
            className="OrderButton"
            onClick={() => {
              window.location.href = "/item";
            }}
          >
            Order Now
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default FirstScreen;

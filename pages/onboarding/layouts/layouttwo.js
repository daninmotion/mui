import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Icon,
  TextField,
  Typography,
  Grid
} from '@mui/material';
import Item from '@mui/material/ListItem';

const LayoutOne = (props) => {
  return (
    <React.Fragment>
      <Box sx={{ border: '1px solid red', height: '80px' }}></Box>
      <Container sx={{ marginY: 8 }} maxWidth="lg">
        <Grid sx={{ border: '1px solid red' }} container>
          <Grid sx={{ border: '1px solid red' }} xs={12} md={8} lg={6}>
            <Box
              sx={{
                backgroundColor: 'blue',
                width: '100%',
                height: '100px',
                color: 'white'
              }}
            >
              xs=6 md=8
            </Box>
          </Grid>
          <Grid sx={{ border: '1px solid red' }} xs={12} md={4} lg={6}>
            <Box
              sx={{
                backgroundColor: 'blue',
                width: '100%',
                height: '100px',
                color: 'white'
              }}
            >
              xs=6 md=8
            </Box>
          </Grid>
          <Grid sx={{ border: '1px solid red' }} xs={6} md={4}>
            <Box>xs=6 md=4</Box>
          </Grid>
          <Grid sx={{ border: '1px solid red' }} xs={6} md={8}>
            <Box>xs=6 md=8</Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default LayoutOne;

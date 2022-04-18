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
          <Grid
            sx={{ border: '1px solid red' }}
            order={{ xs: 2, md: 1 }}
            xs={12}
            md={5}
          >
            <Box
              sx={{
                backgroundColor: 'blue',
                width: '100%',
                height: '100px',
                color: 'white'
              }}
            >
              Box
            </Box>
          </Grid>
          <Grid
            sx={{ border: '1px solid red' }}
            order={{ xs: 1, md: 2 }}
            xs={12}
            md={7}
          >
            <Box
              sx={{
                backgroundColor: 'green',
                width: '100%',
                height: '100px',
                color: 'white'
              }}
            >
              Box
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default LayoutOne;

import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography
} from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'At least 8 characters, 1 lowercase & 1 uppercase, 1 special character and 1 number.';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp = (props) => {
  return (
    <React.Fragment>
      <Box sx={{ border: '1px solid red', height: '80px' }}></Box>
      <Container sx={{ marginY: 8 }} maxWidth="lg">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: '504px',
                height: '463px',
                backgroundColor: 'grey.700',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box>Image</Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px solid red',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{ border: '1px solid red', maxWidth: '500px', width: '100%' }}
            >
              <Typography sx={{ marginBottom: 4 }} variant="h5" component="h1">
                Join as a Trader
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1, marginRight: 2 }}>
                  <TextField
                    label="First Name"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <TextField
                    label="Last Name"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                  <TextField
                    label="Email"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ flexGrow: 1, marginTop: 2 }}>
                  <TextField
                    label="Password"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                  />
                  <MyFormHelperText />
                </FormControl>
              </Box>
              <Box sx={{ backgroundColor: 'grey.50', padding: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                  <Box>
                    <Checkbox {...label} />
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }} variant="body2">
                    I declare that I have read, understood and agree to the{' '}
                    <Box
                      as="span"
                      sx={{ fontWeight: 'medium', textDecoration: 'underline' }}
                    >
                      Terms and conditions.
                    </Box>
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', marginTop: 1, alignItems: 'baseline' }}
                >
                  <Box>
                    <Checkbox {...label} />
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }} variant="body2">
                    I am at least 18 years old and I am a US Citizen or legal
                    resident.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', marginTop: 1, alignItems: 'baseline' }}
                >
                  <Box>
                    <Checkbox {...label} defaultChecked />
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }} variant="body2">
                    Subscribe to our newsletter.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button variant="contained" fullWidth>
                  CONTINUE
                </Button>
              </Box>
              <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                <Typography sx={{ color: 'text.secondary' }} variant="body2">
                  Already have an account?{' '}
                  <Box as="span">
                    <Button size="small">log in</Button>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;

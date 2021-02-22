import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { FieldTextInput } from '../../components';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from 'semantic-ui-react'


const USER_TAKEN = 'auth/email-already-in-use';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  error: {
    marginBottom: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: 'white',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));
const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const DropdownExampleClearable = () => (
  <Dropdown clearable options={options} selection />
)

const SignupForm = props => {

  const classes = useStyles();

  return (
    <Form
      {...props}
      render={formProps => {

        const {
          handleSubmit,
          inProgress,
          onError
        } = formProps;

        const errorMessage = onError
          ? onError.code === USER_TAKEN
            ? 'User already exist'
            : 'Something went wrong. Try again'
          : null;

        return (
          <form className={classes.form} onSubmit={handleSubmit}>
            {errorMessage ? <Typography color="error" className={classes.error}>{errorMessage}</Typography> : null}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FieldTextInput
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldTextInput
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <FieldTextInput
                  variant="outlined"
                  required
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>


              <Grid item xs={12}>
              <FieldTextInput
                  variant="outlined"
                  
                  type="email"
                  id="email"
                  label="Position"
                  name="email"
                  
                />
              </Grid>

              <Grid item xs={12}>
              <FieldTextInput
                  variant="outlined"
                  
                  type="email"
                  id="email"
                  label="Province"
                  name="email"
                  
                />
              </Grid>

              <Grid item xs={12}>
              <FieldTextInput
                  variant="outlined"

                  type="email"
                  id="email"
                  label="District"
                  name="email"
                  
                />
              </Grid >
              <Grid item xs={12}>
              <FieldTextInput
                  variant="outlined"

                  type="email"
                  id="email"
                  label="School"
                  name="email"
                  
                />
                </Grid>
              <Grid item xs={12}>
                <FieldTextInput
                  variant="outlined"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              startIcon={inProgress ? <CircularProgress size={20} className={classes.buttonProgress} /> : null}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/login" className={classes.link}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        );
      }}
    />
  );
}

export default SignupForm;

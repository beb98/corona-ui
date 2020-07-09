/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, CircularProgress, Grid, Card, Typography } from '@material-ui/core';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' }
  }
};

const useStyles = makeStyles(() => ({
  root: {},
  fields: {
    // margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      // margin: theme.spacing(1)
    }
  },
  submitButton: {

    marginTop :'20px'
  }
}));

function LoginForm({
  className,
  login,  
  state,
  ...rest
}) {
  const classes = useStyles();
  // console.log('location', location.state);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    return () => { };
  }, []);
  const handleChange = (event) => {
    event.persist();

    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...prevFormState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...prevFormState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  };

  const hasError = (field) => !!(formState.touched[field] && formState.errors[field]);

  useEffect(() => {
    
    const errors = validate(formState.values, schema);

    setFormState((prevFormState) => ({
      ...prevFormState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);
  // console.log('sabrin' , state)

  return (
    <Card style={{width : '600px' , margin:'20px auto 0 auto' , padding: '10px'}}>
      <Typography variant="h5">Login</Typography>

        <form
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          <div className={classes.fields}>
            <TextField
              error={hasError('email')}
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              label="Email address"
              margin="dense"
              name="email"
              onChange={handleChange}
              value={formState.values.email || ''}
              variant="outlined"
            />
            <TextField
              error={hasError('password')}
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              label="Password"
              margin="dense"
              name="password"
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
              variant="outlined"
            />
          </div>
          <Button
            className={classes.submitButton}
            color="secondary"
            disabled={!formState.isValid}
            size="large"
            type="submit"
            variant="contained"
          >
            <Grid container direction="row" alignItems="center" justify="center">
              <Grid item>Sign in</Grid>
              
            </Grid>
          </Button>
        </form>

    </Card>
   

  );
}

LoginForm.propTypes = {
  className: PropTypes.string
};


export default LoginForm;
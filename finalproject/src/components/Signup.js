// import React from 'react'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react'


const defaultTheme = createTheme();

const Signup = () => {
  const nav =useNavigate();
   const redirect = ()=>{
   
   }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let checking =0
        if(data.get("firstName").trim()===""){
          window.alert("First Name is required");
          checking=1
          return false;
        }
        if(!data.get("firstName").trim().match('^[a-zA-Z]{3,20}$')){
          window.alert("First Name contain only character min 20 and maxiumum of 20 characters");
          checking=1
          return false;
        }
        else{
          
        }
      if(data.get("lastName").trim()===""){
          window.alert("Last name is required");
          checking=1
          return false;
        }
        if(!data.get("lastName").trim().match('^[a-zA-Z ]{3,20}$')){
          window.alert("Last name contain only character min 20 and maxiumum of 20 characters");
          checking=1
          return false;
        }
        if(data.get("username").trim()===""){
          window.alert("useraname is required");
          checking=1
          return false;
        }
        if(!data.get("username").trim().match('^[a-zA-Z0-9]{3,20}$')){
          window.alert("username contain only character min 20 and maxiumum of 20 characters");
          checking=1
          return false;
        }
        if(data.get("email").trim()===""){
          window.alert("Email is required");
          checking=1
          return false;
        }
        if(!data.get("email").match('^[a-zA-Z0-9@.]{3,50}$')){
          window.alert("email contain only character");
          checking=1
          return false;
        }
        if(data.get("email")===axios.get(`http://localhost:8888/users/useremail?=${data.get('email')}`)){
          window.alert("email contain only character");
          checking=1
          return false;
        }
        if(!data.get("phone").trim()===""){
          window.alert("Enter the correct contact number");
          checking=1
          return false;
        }
        if(!data.get("phone").trim().match(`^[0-9]{10}$`)){
          window.alert("Enter the correct contact number");
          checking=1
          return false;
        }
        if(data.get("address").trim()===""){
          window.alert("City was required");
          checking=1
          return false;
        }
        if(!data.get("address").trim().match('^[a-zA-Z]{3,20}$')){
          window.alert("Enter the correct city");
          checking=1
          return false;
        }
        if(data.get("password").trim()===""){
          window.alert("password was is required");
          checking=1
          return false;
        }
        if(!data.get("password").trim().match('^[a-zA-Z0-9!@$%^&*]{3,20}$')){
          window.alert("Password maximum length was 3 to 20");
          checking=1
          return false;
        }
        if(!data.get("password")==data.get("conform_Password")){
          window.alert("password not match");
          checking=1
          return false;
        }

        window.alert(checking);
        if(checking===0){

          let firstName = data.get("firstName") 
        let LastName = data.get("lastName") 
        let username = data.get("username") 
        let emailid = data.get("email") 
        let phonenumber = data.get("phone") 
        let city = data.get("address") 
        let password = data.get("password") 
        let conform_password = data.get("conform_password") 
          const userdata = {
          
            full_name: firstName+" "+LastName,
            username: username,
            useremail: emailid,
            userpassword: password,
            phone: phonenumber,
            address: city,
          }
              axios.post(`http://localhost:8888/users`,userdata);
               window.alert("Added successfully");
              nav('/login');   
         
        }
      }
      
        
        

    return (
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phonenumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="address"
                  label="City"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="conform_Password"
                  label="conform_Password"
                  type="password"
                  id="conform_password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>redirect()}
            >
              Sign Up
            </Button>
            <br/>
          </Box>
          <Grid container justifyContent="flex-end"  onClick={()=>redirect()}>
              <Grid item>
                <Link component="button" variant="body2" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
    
}

export default Signup

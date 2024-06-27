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
    nav("/login")
    
   }


  //  const inputChangeHandler = (events)=>{
  //   const {type,name,value} = events.target;
  //   setItemData({...itemData,[name]:value});


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });

          
    const userdata = {
      username: data.get("firstName")+" "+data.get("lastName"),
        useremail: data.get("email"),
        userpassword: data.get("password"),
        username: data.get("username"),
        phonenumber: data.get("phone_number"),
        address: data.get("address"),
        checking : 0
    }
    
  
    const addRecord = (event)=>{
        userdata.checking = 0
        event.preventDefault();
        window.alert(data.get("firstName"))
        if(data.get("firstName").trim()===""){
            window.alert("First Name is required");
            userdata.checking=1
            return false;
          }
        //   if(!itemData.first_name.trim().match('^[a-zA-Z]{3,20}$')){
        //     window.alert("First Name contain only character min 20 and maxiumum of 20 characters");
        //     itemData.checking=1
        //     return false;
        //   }
        // if(itemData.Last_name.trim()===""){
        //     window.alert("Last name is required");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(!itemData.Last_name.trim().match('^[a-zA-Z ]{3,20}$')){
        //     window.alert("Last name contain only character min 20 and maxiumum of 20 characters");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(itemData.username.trim()===""){
        //     window.alert("useraname is required");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(!itemData.first_name.trim().match('^[a-zA-Z0-9]{3,20}$')){
        //     window.alert("username contain only character min 20 and maxiumum of 20 characters");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(!itemData.email.match('^[a-zA-Z0-9@.]{3,20}$')){
        //     window.alert("Enter the correct email address");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(!itemData.phonenumber.match('^[0-9]{10}$')){
        //     window.alert("Enter the correct contact number");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(itemData.city.trim()===""){
        //     window.alert("City was required");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(!itemData.city.trim().match('^[a-zA-Z]{3,20}$')){
        //     window.alert("Enter the correct city");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(itemData.password.trim()===""){
        //     window.alert("password was is required");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(!itemData.password.trim().match('^[a-zA-Z0-9!@$%^&*]{3,20}$')){
        //     window.alert("Password maximum length was 3 to 20");
        //     itemData.checking=1
        //     return false;
        //   }
        //   if(itemData.password===itemData.conform_password){
        //     window.alert("select the car type");
        //     itemData.checking=1
        //     return false;
        //   }

          // window.alert(itemData.checking);
          // if(itemData.checking===0){
          //   if(window.confirm("do you want to adding this car")){
          //       axios.post(`http://localhost:8888/users`,itemData);
          //        window.alert("Added successfully");
          //       nav('/login');
          //   }   
           
          // }
          
    }}




       
          
        // axios.post(`http://localhost:8888/users`,itemData);
        // window.alert("Added successfully");
        // nav('/login');
      
        
        

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
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone Number"
                  name="phonenumber"
                  autoComplete="phonenumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="City"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
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
                  required
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

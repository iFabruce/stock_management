import React from 'react'
import Grid from '@mui/material/Grid'
import '../assets/css/Login.css'
import pic from '../assets/images/pp.png'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate();

  return (
    <div>
        <Grid container spacing={0}>
            <Grid item style={12} md={6}>
                <div className='leftSide'>
                </div>
            </Grid>
            <Grid item style={12} md={6}>
                <div className='rightSide'>
                    <h1 className='header'>Inscription</h1>
             
                    <div className='form'>   <TextField id="standard-basic" label="Email" variant="standard" type="email" className='textField' />  </div>
                    <div className='form'>   <TextField id="standard-basic" label="Mot de passe" variant="standard" type="password" className='textField' /> </div>
                    <div className='form'>  <Button  variant="contained" style={{backgroundColor: '#595FF1'}} className='btn' onClick={() => { navigate('/dashboard') }}>S'inscire</Button> </div> <br/>
                  
                    <p>Vous avez déjà compte? | 
                    <a href="#" onClick={ navigate('/')}>Se connecter</a>
                    </p> 
                </div>
            </Grid>
          
        </Grid>
    </div>
  )
}

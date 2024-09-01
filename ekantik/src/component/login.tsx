import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import { loginActions } from '../store/slices/loginSlice';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
   
    const dispatch = useDispatch();
    const login = useSelector((state: any) => state.login);
    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setEmail(event.target.value));
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Replace with actual authentication logic
       
    if (login.email === 'pramukhmahant@baps.com' && login.passWord === 'Swamainarayan') {
        dispatch(loginActions.login());
        navigate('/home');
      } else {
        alert('Invalid credentials');
      }
        
    };

    return (
        
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="70vh"
        >
            
            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{
                    border: '1px solid #ccc',
                    padding: '50px',
                    borderRadius: '8px',
                    width: '500px',
                    height: '220px',
                    textAlign: 'center'
                }}
            >
                <TextField
                    label="Email"
                    type="email"
                    value={login.email}
                    onChange={handleEmailChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={login.passWord}
                    onChange={handlePasswordChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    sx={{ marginTop: '20px' }}
                >
                    Login
                </Button>
            </Box>
           
        </Box>
    )}

export default Login;
import React from 'react';
import { Box, Button, TextField, Typography, FormControlLabel, Checkbox, Link ,  CardMedia } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    const backgroundImageUrl ="https://img.freepik.com/premium-vector/vector-binary-code-gray-seamless-background-big-data-programming-hacking-decryption-encryption-computer-streaming-white-numbers-1-0-coding-hacker-concept-texture-web-page-fill_167184-340.jpg?w=1800"
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover', // Arka plan resminin boyutunu ölçeklemek için
        }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={5}
                borderRadius={15}
                boxShadow="5px 5px 10px #c1ead3"
                sx={{
                    ":hover": {
                        boxShadow: "10px 10px 20px #c1ead3",
                    },
                }}
                marginLeft={5}
                width={600}
                height={520}
                style={{ backgroundColor: '#6b6c6c' }}
                
            >
                <Typography variant="h4" textAlign="center" marginBottom={3}>
                    <LockIcon fontSize="large" style={{ marginRight: '10px', verticalAlign: 'middle' }} /> 
                    Login
                </Typography>
                <form style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '85%', height: '60%', boxShadow: "5px 5px 10px #082670"}}>
                    <TextField margin="normal" type="text" variant="standard" placeholder="Username" InputProps={{ disableUnderline: true }} style={{ backgroundColor: '#59c58c', borderRadius: '15px', padding: '10px', width: '80%'}} />
                    <TextField margin="normal" type="password" variant="standard" placeholder="Password" InputProps={{ disableUnderline: true }} style={{ backgroundColor: '#59c58c', borderRadius: '15px' ,  padding: '10px', width: '80%'}} />
                    <Box style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start', marginLeft: '38px', marginTop: '10px' }}>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label={<Typography variant="body2" style={{ color: 'black' }}>Remember Me</Typography>}
                        />
                    </Box>
                    <Button variant="contained" color="primary" InputProps={{ disableUnderline: true }} style={{ marginTop: '20px' , width: '50%', backgroundColor: '#082670', borderRadius: '15px'}}>Sign In</Button>
                    
                    <Link href="#" style={{ color: '#082670', marginTop: '10px' }}>Forgot Password?</Link>
                </form>
            </Box>
            <CardMedia
                    component="img"
                    alt="Label Management System"
                    height="auto"
                    maxWidth="80%"
                    image="https://leibinger-group.com/application/files/2016/0397/9427/logo-label-management-system.png"
                    style={{ marginTop: '20px' , marginLeft: '5px'}}
                />
          
            

        </div>
    );
}

export default Login;

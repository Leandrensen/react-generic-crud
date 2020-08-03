import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const Login = (props) => {
    // const { abmLogin, login, resetUser } = props;
    //
    // const [credenciales, setCredenciales] = useState({ email: null, password: null });
    // const [recordar, setRecordar] = useState(true);
    //
    // useEffect(() => {
    //     return () => {
    //         resetUser();
    //     };
    // }, []);
    //
    // const handleInput = (name, value) => {
    //     setCredenciales({ ...credenciales, [name]: value });
    // };
    //
    // const handleCheck = (e) => {
    //     event.target.checked;
    //     setRecordar(event.target.checked);
    // };
    //
    // const onFormSubmit = (event) => {
    //     event.preventDefault();
    //     login(credenciales, recordar);
    // };
    //
    return (
        <Box>
            <form className='login' noValidate autoComplete='off'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField id='outlined-basic' label='Username' variant='outlined' align='center' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='outlined-basic' label='Password' variant='outlined' align='center' />
                    </Grid>
                </Grid>
            </form>
        </Box>

        //     <div className='login'>
        //         <TextField
        //             required
        //             id='username'
        //             label='Username'
        //             defaultValue='Default Value'
        //             helperText='Some important text'
        //             variant='outlined'
        //         />
        //         <TextField
        //             required
        //             id='password'
        //             label='Password'
        //             defaultValue='Default Value'
        //             helperText='Some important text'
        //             variant='outlined'
        //         />
        //     </div>

        // <div className='login-container'>
        //     <div className='card'>
        //         <span className='titulo'>Ingresar a tu cuenta</span>
        //         <form onSubmit={onFormSubmit}>
        //             <InpuText
        //                 onChange={handleInput}
        //                 name='email'
        //                 error={abmLogin.error}
        //                 errorMessage='Algunos de los datos es incorrecto'
        //                 value={credenciales.email}
        //                 label='dirección correo electrónico'
        //             />
        //             <InpuText
        //                 onChange={handleInput}
        //                 name='password'
        //                 type='password'
        //                 error={abmLogin.error}
        //                 errorMessage='Algunos de los datos es incorrecto'
        //                 value={credenciales.password}
        //                 label='contraseña'
        //             />
        //             <CheckBox checked={recordar} onChange={handleCheck} label='Recordar mi usuario' />
        //             <Button
        //                 style={{ margin: '20px 0' }}
        //                 loading={abmLogin.loading}
        //                 color='primary'
        //                 type='submit'
        //                 fullWidth>
        //                 Ingresar
        //             </Button>
        //         </form>
        //     </div>
        // </div>
    );
};

export default Login;

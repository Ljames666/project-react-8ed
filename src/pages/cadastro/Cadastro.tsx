import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setuser } from '../../store/userSlice';
import { v4 } from 'uuid';

const Boxlogin = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: 'black',
    color: 'whitesmoke',

    '& .flex-col': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
        height: '100%',
        '& .card': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '50%',
            height: '90%',
            background: 'rgb(255,255,255,0.05)',
            borderRadius: '2rem',
            boxShadow: `rgba(81, 154, 231, 0.4) 0px 0px 10px,
             rgba(81, 154, 231, 0.3) 0px 0px 15px,
              rgba(81, 154, 231, 0.2) 0px 0px 20px,
               rgba(81, 154, 231, 0.1) 0px 0px 25px,
                rgba(81, 154, 231, 0.05) 0px 0px 30px;`,
        },
    },
    '& .MuiInput-input': {
        color: '#0079c6',
    },
    '& .bg': {
        background: 'url("./assets/images/bg1.png")',
    },
}));

export default function Cadastro() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');

    const handleClick = () => {
        if (!username || !name || !email || !password) {
            throw new Error('sem dados');
        }
        if (password !== rPassword) {
            throw new Error('senhas não conferem');
        }
        const user = {
            id: v4(),
            username,
            password,
            name,
            email,
            createdDate: new Date(),
            updateDate: new Date(),
        };
        dispatch(setuser(user));
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <>
            <Boxlogin>
                <Box className="bg flex-col">
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: '700',
                            textShadow: `1px 5px 5px #000`,
                            marginBottom: '3rem',
                        }}
                    >
                        TASK LIST
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            margin: '0 2rem',
                            textAlign: 'center',
                            textShadow: `1px 2px 2px #000`,
                        }}
                    >
                        Have all your personal and professional daily commitments in your hand
                    </Typography>
                </Box>
                <Box className="flex-col">
                    <Box className="card" sx={{ padding: 2 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: '700',
                                color: '#0079c6',
                                textShadow: `1px 1px 2px #fff`,
                            }}
                        >
                            Registration
                        </Typography>

                        <TextField
                            fullWidth
                            label="username"
                            variant="standard"
                            color="info"
                            size="small"
                            focused
                            type="text"
                            sx={{ marginTop: 2 }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            label="name"
                            variant="standard"
                            color="info"
                            size="small"
                            focused
                            type="text"
                            sx={{ marginTop: 2 }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="email"
                            variant="standard"
                            color="info"
                            size="small"
                            focused
                            type="email"
                            sx={{ marginTop: 2 }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="password"
                            variant="standard"
                            color="info"
                            size="small"
                            focused
                            type="password"
                            sx={{ marginTop: 2 }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="reppeat password"
                            variant="standard"
                            color="info"
                            size="small"
                            focused
                            type="password"
                            sx={{ marginTop: 2 }}
                            value={rPassword}
                            onChange={(e) => setRPassword(e.target.value)}
                        />

                        <Button
                            onClick={handleClick}
                            color="info"
                            variant="outlined"
                            sx={{ margin: 2 }}
                        >
                            Send
                        </Button>
                        <Typography>Don't have an account?</Typography>
                        <Link to="/login">Come back</Link>
                    </Box>
                </Box>
            </Boxlogin>
        </>
    );
}

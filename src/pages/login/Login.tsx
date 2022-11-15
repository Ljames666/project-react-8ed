import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StateApp } from '../../store/rootReducer';
import { setUserLogon, User } from '../../store/userSlice';

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
            height: '50%',
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
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userList } = useSelector((state: StateApp) => state.user);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClick = () => {
        if (!username || !password) {
            console.log('sem dados');

            return;
        }
        const searchUser = userList.find(
            (user) => user.username === username && user.password === password
        );
        if (!searchUser) {
            setUsername('');
            setPassword('');
            console.log('não existe usuario');

            return;
        }
        const activeUser: Partial<User> = {
            id: searchUser.id,
            username: searchUser.username,
        };
        dispatch(setUserLogon(activeUser));
        navigate('/home');
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
                            Login
                        </Typography>
                        <TextField
                            fullWidth
                            label="email"
                            variant="standard"
                            color="info"
                            focused
                            value={username}
                            sx={{ marginTop: 2 }}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="password"
                            variant="standard"
                            color="info"
                            focused
                            value={password}
                            sx={{ marginTop: 2 }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            onClick={handleClick}
                            color="info"
                            variant="outlined"
                            sx={{ margin: 2 }}
                        >
                            Sing In
                        </Button>
                        <Typography>Don't have an account?</Typography>
                        <Link to="/cadastro">Register Now</Link>
                    </Box>
                </Box>
            </Boxlogin>
        </>
    );
}

import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BoxIntro = styled(Box)(() => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: '#0079c6',
    textShadow: `1px 1px 2px #fff`,
}));

export default function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 4000);
    }, []);

    return (
        <BoxIntro>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h1" sx={{ marginRight: 4 }}>
                    TASK
                </Typography>

                <CircularProgress color="secondary" />

                <Typography variant="h1" sx={{ marginLeft: 4 }}>
                    LIST
                </Typography>
            </Box>
            <Box>
                <Typography variant="h3">Your daily tasks app</Typography>
            </Box>
        </BoxIntro>
    );
}

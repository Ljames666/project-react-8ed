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

    '& .flex-row': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    }, [navigate]);

    return (
        <BoxIntro>
            <Box>
                <Typography variant="h1" sx={{ marginRight: 4 }}>
                    TASK
                </Typography>

                <CircularProgress color="success" />

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

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
                <Typography variant="h2" color="white" style={{ margin: 10, marginBottom: '4%' }}>Eleos: Frontend developer exercise</Typography>
                <Typography variant="h3" color="white" gutterBottom>Welcome to the Home Page</Typography>
                <Button variant="contained" component={Link} to="/user" style={{ margin: '10px' }}>
                    Go to User Page
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/task" style={{ margin: '10px' }}>
                    Go to Task Page
                </Button>
                <Typography style={{ marginTop: '20%' }} variant='h6' color='white'>
                    Made by <strong> Kelton Cabral</strong>
                </Typography>
                <Typography variant='p' color='white' component='a' href='https://github.com/CledirFL' target='blank'>
                    GitHub
                </Typography>
                <Typography variant='p' color='white' component='a' href='https://www.linkedin.com/in/kelton-cabral-cv/' target='blank'>
                    LinkedIn
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
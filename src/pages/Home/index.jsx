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
            </Box>
        </Container>
    );
};

export default Home;
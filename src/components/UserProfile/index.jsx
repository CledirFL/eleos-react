import React from 'react';
import { Container, Grid, Paper, Typography, Avatar, List, ListItem, ListItemText, Divider } from '@mui/material';


const UserProfile = ({ user }) => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.image} style={{ width: '128px', height: '128px', margin: 'auto', backgroundColor: 'gray' }} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
                        <Typography variant="subtitle1">{user.company.title} at {user.company.name}</Typography>
                        <Typography variant="body1">Age: {user.age}</Typography>
                        <Typography variant="body1">Email: {user.email}</Typography>
                        <Typography variant="body1">Phone: {user.phone}</Typography>
                        <Typography variant="body1">Address: {`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}`}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Username" secondary={user.username} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Birth Date" secondary={user.birthDate} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Blood Group" secondary={user.bloodGroup} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Height" secondary={`${user.height} cm`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Weight" secondary={`${user.weight} kg`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Eye Color" secondary={user.eyeColor} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Hair Color" secondary={user.hair.color} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Hair Type" secondary={user.hair.type} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="University" secondary={user.university} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bank Card Type" secondary={user.bank.cardType} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bank Card Number" secondary={user.bank.cardNumber} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Crypto Wallet" secondary={user.crypto.wallet} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                        <Typography variant="h5" style={{ marginTop: '20px' }}>Company Information</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Company Name" secondary={user.company.name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Department" secondary={user.company.department} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Job Title" secondary={user.company.title} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Company Address" secondary={`${user.company.address.address}, ${user.company.address.city}, ${user.company.address.state}, ${user.company.address.country}`} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default UserProfile;
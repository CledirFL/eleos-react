import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardContent, Container, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SeesIcon from "@mui/icons-material/Visibility";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import { ArrowBack } from '@mui/icons-material';


export default function User() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (users.length < 1) fetchUser();
    }, [users])


    async function fetchUser() {
        setLoading(true)
        try {
            let response = await fetch('https://dummyjson.com/users')
            let data = await response.json();
            setUsers(data.users)
            setLoading(false)

        } catch (e) {
            setLoading(false)
            console.log('Error in fetch users: ' + e)
        }

    }
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.3, hide: true },
        {
            field: 'image', headerName: 'Picture', flex: 0.5,
            renderCell: (params) => {
                return (<Avatar src={params.value} alt={params.value} variant="rounded" style={{ background: "#e6a1ac" }}></Avatar>);
            },
        },
        {
            field: 'name', headerName: 'Name', flex: 1,
            renderCell: (params) => {
                return (<Typography >
                    {params.row.firstName} {params.row.lastName}
                </Typography>);
            },
        },
        { field: 'email', headerName: 'E-mail', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1, },
        { field: 'university', headerName: 'University', flex: 1 },
        { field: 'role', headerName: 'Role', flex: 0.5 },
        {
            field: 'actions_sees',
            headerName: 'Actions',
            renderHeader: null,
            headerAlign: "center",
            width: 50,
            renderCell: (params) => (
                <strong>
                    <IconButton onClick={() => navigate('/user/' + params.row.id)} aria-label="see details">
                        <SeesIcon style={{ color: "#e6a1ac" }} />
                    </IconButton>
                </strong>
            )
        },
    ];

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid style={{ marginTop: '3%' }} container justifyItems='flex-start' item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <IconButton onClick={() => navigate('/')} size="large" aria-label="delete" style={{ backgroundColor: '#3e3b47' }}>
                        <ArrowBack />
                    </IconButton>
                </Grid>
                <Grid style={{ marginTop: '2%' }} item xs={12} md={12} lg={12} xl={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color='primary' />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                User page
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List component="ul">
                                <ListItem>
                                    <ListItemText
                                        primary="Accessing /users should display all users that come in the response to this API call
                                        https://dummyjson.com/users" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Click on a single user should take you to /users/:id and display the information about
                                            the user. Refreshing the page while on the /users/:id should still display the
                                            information about the user (API call to get a single user:
                                            https://dummyjson.com/users/[userId])" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card>
                        <CardContent>
                            <DataGrid
                                loading={isLoading}
                                autoHeight
                                rows={users}
                                columns={columns} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}

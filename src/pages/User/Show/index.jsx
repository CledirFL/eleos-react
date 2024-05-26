import { Avatar, Breadcrumbs, Card, CardContent, CircularProgress, Container, Grid, List, ListItem, ListItemText, Link as MLink, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserProfile from '../../../components/UserProfile';

export default function ShowUser() {
    const params = useParams()
    const [user, setUser] = useState()
    const [isLoading, setLoading] = useState(false)


    async function fetchUserById(params) {
        setLoading(true)
        const userId = params.id
        try {
            let response = await fetch('https://dummyjson.com/users/' + userId)
            let data = await response.json();
            setUser(data)
            setLoading(false)

            console.log({ dataU: data, user })
        } catch (e) {
            setLoading(false)
            console.log('Error in fetch users: ' + e)
        }
    }

    useEffect(() => {
        if (!user) { fetchUserById(params) }
    }, [user])


    return (
        <Container>
            <Card style={{ marginTop: '3%' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                    <Breadcrumbs aria-label="breadcrumb">
                        <MLink underline="hover" color="inherit">
                            <Link to="/" style={{ textDecoration: 'none', color: 'gray', }} > Home</Link>
                        </MLink>

                        <MLink
                            underline="hover"
                            color="inherit"
                        >
                            <Link to="/user" style={{ textDecoration: 'none', color: 'gray' }} > User</Link>
                        </MLink>

                        <Typography color="text.primary">Show</Typography>
                    </Breadcrumbs>

                    <div style={{ marginTop: '5%', marginBottom: '2%' }}>
                        <Typography variant="h5" component="h2">
                            Show User
                        </Typography>
                    </div>

                    {user ? <UserProfile user={user} /> : <CircularProgress />}

                </CardContent>
            </Card>
        </Container >
    )
}

import { Avatar, Card, CardContent, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SeesIcon from "@mui/icons-material/Visibility";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import GoBack from '../../components/GoBack';
import UserDescription from '../../components/UserDescription';


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
            <Grid container spacing={2} style={{ marginTop: '3%' }}>
                <GoBack />
                <UserDescription />
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

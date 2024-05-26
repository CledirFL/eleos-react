import { ArrowBack } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

export default function GoBack() {
    const navigate = useNavigate();

    return (
        <Grid container justifyItems='flex-start' item xs={12} sm={12} md={12} lg={12} xl={12} >
            <IconButton onClick={() => navigate('/')} size="large" aria-label="delete" style={{ backgroundColor: '#3e3b47' }}>
                <ArrowBack />
            </IconButton>
        </Grid>
    )
}

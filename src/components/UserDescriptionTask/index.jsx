import { Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function UserDescriptionTask() {
    return (
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
    )
}

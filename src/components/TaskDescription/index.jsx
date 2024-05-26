import { Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TaskDescription() {
    return (
        <Grid item xs={12} md={12} lg={12} xl={12}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color='primary' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        Tasks page
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List component="ul">
                        <ListItem>
                            <ListItemText primary="A form to create tasks" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="A list to display the tasks created" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="You should be able to create/edit/remove tasks" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="It should be responsive (mobile/desktop). Up to you how to display it in those view
            ports" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

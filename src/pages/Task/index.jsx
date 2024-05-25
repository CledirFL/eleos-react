import {
    Accordion, AccordionDetails, AccordionSummary, Box, Button, Card,
    CardActions, CardContent, Container, Grid, List, ListItem,
    ListItemText, TextField, Typography
} from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { initialRows } from '../../utils';
import FullFeaturedCrudGrid from '../../components/DataGrid'


export default function Task() {
    const [tasks, setTasks] = useState(initialRows);
    const [isLoading, setLoading] = useState(false);
    const [task, setTask] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        defaultValues: {
            name: '',
            description: '',
        }
    });


    function handleEditClick(id) {
        let task = tasks.find((task) => task.id === id);
        setTask(task);
        setValue('name', task.name);
        setValue('description', task.description);
    }

    function handleEditClickSubmit(data) {
        setLoading(true)
        let getTask = task;
        getTask.name = data.name;
        getTask.description = data.description;
        setTimeout(() => {
            setTasks(tasks.map((item) => (item.id === getTask.id ? getTask : item)));
            setLoading(false)
            setTask(null)
            reset({
                name: '',
                description: '',
            })
        }, 1000)



    }

    function handleDeleteClick(id) {
        setTasks(tasks.filter((_, index) => index !== id));
    }

    function handleCreateTask(dataForm) {
        setLoading(true)
        let data = {
            id: tasks.length + 1,
            ...dataForm
        }
        setTimeout(() => {

            setTasks([...tasks, data,])
            setLoading(false)
            reset({
                name: '',
                description: '',
            })
        }, 1000)
    }

    function handleCancel() {
        setTask(null)
        reset({
            name: '',
            description: '',
        })
    }

    const columns = [
        { flex: 1, field: 'name', headerName: 'Name', type: 'text', editable: true },
        {
            flex: 1,
            field: 'description',
            headerName: 'Description',
            align: 'left',
            headerAlign: 'left',
            editable: true,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={() => handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <Container maxWidth="lg"  >
            <Box sx={{ flexGrow: 1, marginTop: '3%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
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
                    <Grid item xs={5}>
                        <Card>
                            <CardContent style={{ padding: 20 }}>
                                <Typography variant='h3' color="text.secondary" gutterBottom>
                                    Add task
                                </Typography>
                                <TextField
                                    error={errors.name?.type === 'required'}
                                    {...register('name', { required: true })}
                                    style={{ marginBottom: 10, marginTop: 20 }}
                                    fullWidth label="Name" id="name"
                                    // helperText="name is required."
                                    required
                                />
                                <TextField
                                    {...register('description', { required: true })}
                                    error={errors.description?.type === 'required'}
                                    multiline
                                    maxRows={4}
                                    minRows={2}
                                    fullWidth
                                    label="Description"
                                    id="description"
                                    required
                                />

                            </CardContent>
                            <CardActions style={{ padding: 20 }}>
                                <Button size="small" onClick={handleCancel}>cancel </Button>
                                <LoadingButton
                                    size="small"
                                    onClick={task ? handleSubmit((data) => handleEditClickSubmit(data)) : handleSubmit((data) => handleCreateTask(data))}
                                    loading={isLoading}
                                    variant="outlined"

                                >
                                    <span>{task ? "Salvar" : "Submit"}</span>
                                </LoadingButton>
                                {/* <Button size="small" type='submit' onClick={handleSubmit((data) => console.log({ data }))}>Submit</Button> */}
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={7}>
                        <Card>
                            <CardContent style={{ padding: 20 }}>
                                <Typography variant='h3' color="text.secondary" gutterBottom>
                                    List of tasks
                                </Typography>

                                <Box
                                    sx={{
                                        width: '100%',
                                        '& .actions': {
                                            color: 'text.secondary',
                                        },
                                        '& .textPrimary': {
                                            color: 'text.primary',
                                        },
                                        marginTop: 5
                                    }}
                                >
                                    <DataGrid
                                        rows={tasks}
                                        columns={columns}
                                        editMode="row"
                                    />
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ height: '100vh' }} >
                <FullFeaturedCrudGrid />
            </Box>
        </Container >
    )
}
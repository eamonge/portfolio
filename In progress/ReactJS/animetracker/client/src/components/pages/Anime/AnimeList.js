import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: "update",
        headerName: "Update",
        width: 115
    },
    {
        field: "delete",
        headerName: "Delete",
        width: 110
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', update: 'Update', delete: 'Delete' }
];

function AnimeListComponent() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <h1>Anime List</h1>
                        <div className='tableDivContent'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>A</th>
                                        <th>A</th>
                                        <th>A</th>
                                        <th>A</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>sdfdsfsefewfewsf</td>
                                        <td>sdfsdfdsfwefew</td>
                                        <td>dsfsdfsdfsdfsd</td>
                                        <td>sdfsdfwegeqtgrtehg</td>
                                        <td><EditIcon /></td>
                                        <td><DeleteIcon /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                </Grid>
            </Box>

            {/* <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box> */}
        </div>
    );
}

export default AnimeListComponent;
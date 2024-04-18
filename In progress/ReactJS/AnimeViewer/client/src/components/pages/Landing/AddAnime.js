import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const API_BASE = "http://localhost:5000";

const columns = [
    { field: 'id', headerName: 'ID'},
    {
        field: 'anime_name',
        headerName: 'Anime',
        width: 150,
        editable: true,
    },
    {
        field: 'episode_current',
        headerName: 'Current episode',
        width: 150,
        editable: true,
    },
    {
        field: 'episode_total',
        headerName: 'Total Episodes',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'watched_bool',
        headerName: 'Is watched?',
        // description: 'This column has a value getter asdwqdwqwedfqwdwand is not sortable.',
        sortable: true,
        width: 160
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }
];

function AddAnimeComponent(props) {
    const [anime, setAnime] = useState([]);

    // const rows = [
    //     { id: {anime.data}, anime_name: 'Full Metal Alchemist', episode_current: 25, episode_total: 14, watched_bool: "No"},
    //     { id: 2, anime_name: 'Naruto Shippuden', episode_current: 128, episode_total: 306, watched_bool: "Yes"}
    // ];

    const getAnimes = async () => {
        // const response = await axios.get(`${API_asdfdffwedfedfewafcwsddwBASE}/anime`);
        // const anime = setAnime(response.data);
        const response = await fetch(API_BASE + "/anime");
        const anime = await response.json();
        return anime;
            // .then(res => res.json())
            // .then(data => setAnimadwqadweqwedwqqwwdwdwxcweddwde(data))
            // .catch(err => console.log("error: ", err))
    }
    
    const fetchAnimes = async () => {
        try {
            const data = await getAnimes();
            setAnime(data.data);
        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
        fetchAnimes();
        console.log(anime);
    }, [])

    return (props.trigger) ? (
        <div className='backdrop-div-content'>
            <div className='div-content-front'>
                <h1>Add Anime Component </h1>
                {/* {anime.map(aniim => (
                    <h1>ID is: {aniim.mal_id} </h1>
                ))} */}
                <Tooltip title='Close' arrow>
                    <Button
                        variant="text"
                        className='btnClose'
                        disableRipple
                        onClick={() => props.setTrigger(false)}>
                        < CancelIcon />
                    </Button>
                </Tooltip>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={anime}
                        columns={columns}
                        disableColumnFilter
                        disableColumnSelector
                        disableDensitySelector
                        // disable
                        slots={{ toolbar: GridToolbar }}
                        slotProps={{
                          toolbar: {
                            showQuickFilter: true,
                            csvOptions: { disableToolbarButton: true },
                            printOptions: { disableToolbarButton: true },
                          },
                        }}
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
                </Box>
                {/* <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ height: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 6,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true
                                }
                            }}
                        />
                    </Box>
                    {/* <TextField id="outlined-basic" label="Anime name" variant="outlined" className='inputFollowUp' /> */}
                {/* <TextField id="outlined-basic" label="Type" variant="outlined" className='inputFollowUp' />
                    <TextField id="outlined-basic" label="Severity" variant="outlined" className='inputFollowUp' />
                    <TextField id="outlined-basic" label="Region" variant="outlined" className='inputFollowUp' />
                    <TextField id="outlined-basic" label="Support Area Path" variant="outlined" className='inputFollowUp' />
                    <FormControlLabel required control={<Checkbox />} label="Unresponsive customer" />
                    <TextField id="outlined-basic" label="Return date" variant="outlined" className='inputFollowUp' />
                    <TextField id="outlined-basic" label="Due date" variant="outlined" className='inputFollowUp' />
                    <TextField id="outlined-basic" label="Priority" variant="outlined" className='inputFollowUp' /> */}
                {/* <br /> */}
                {/* <Button
                        variant="text"
                        className='btnAdd'
                        disableRipple>
                        Add Follow up
                    </Button> */}
                {/* </Box>  */}
            </div>
        </div>
    ) : "";
};

export default AddAnimeComponent;
import React, { useEffect, useState } from 'react';
import ViewAnimeList from './AnimeList';
import Button from '@mui/material/Button';
import AddAnimeComponent from './AddAnime';

const BASE_URL = "http://localhost:3001";
const baseURL = "https://api.jikan.moe/v4/anime";


const columns = [
    { 
        field: 'id',
        headerName: 'ID', 
        width: 90
    },
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
        field: 'watched_bool',
        headerName: 'Is watched?',
        // description: 'This column has a value getter and is not sortable.',
        sortable: true,
        width: 160
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }
];

const rows = [
    { id: 1, anime_name: 'Full Metal Alchemist', episode_current: 25, watched_bool: "No"},
    { id: 2, anime_name: 'Naruto Shippuden', episode_current: 128, watched_bool: "Yes"}
];

function LandingComponent() {
    var user = localStorage.getItem('username');
    const [addanimePopup, setaddAnimePopup] = useState(false);

    return (
        <div>
            <h1>Anime's I am currently watching:</h1>
            {/* <h1>Hello {user}!</h1> */}
            <ViewAnimeList rowsData={rows} columnsData={columns}/>
            <Button
                variant="contained"
                className='login-btn'
                style={{marginTop: '1rem'}}
                onClick={() => setaddAnimePopup(true)}>
                Add Anime
            </Button>
            <AddAnimeComponent trigger={addanimePopup} setTrigger={setaddAnimePopup} />
        </div>
    );
};

export default LandingComponent;
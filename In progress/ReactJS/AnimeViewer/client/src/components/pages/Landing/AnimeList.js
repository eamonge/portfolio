import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

function ViewAnimeList(props) {
    // const API_BASE = "http://localhost:5000";

    const columns = props.columnsData;
    const rows = props.rowsData;
    // const [anime, setAnime] = useState([]);

    // const getAnimes = async () => {
    //     // const response = await axios.get(`${API_BASE}/anime`);
    //     // const anime = setAnime(response.data);
    //     const response = await fetch(API_BASE + "/anime");
    //     const anime = await response.json();
    //     return anime;
    //         // .then(res => res.json())
    //         // .then(data => setAnime(data))
    //         // .catch(err => console.logss("error: ", err))
    // }

    // const fetchAnimes = async () => {
    //     try {
    //         const data = await getAnimes();
    //         setAnime(data.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     console.log(anime);
    //     fetchAnimes();
    // }, [])



    return (
        <div style={{ height: '85vh' }}>
            <div style={{ height: '100%', width: '100vw', overflow: 'auto' }}>
                <Box sx={{ height: 400, width: '100%' }}>
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
                </Box>


                {/* {anime.map(test => (
                    <Typography gutterBottom variant="h5" component="div">
                        {test.title_english}
                    </Typography>
                ))} */}
                {/* {anime.map(anim => (
                <Card sx={{ maxWidth: 345, maxHeight: 350 }} className='cardAnime'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`${anim.images.jpg.image_url}`}
                            key={anim.mal_id}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {anim.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {anim.synopsis}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                ))
                } */}

                {/* <Card sx={{ maxWidth: 345 }} className='cardAnime'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cardAnime'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cardAnime'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cardAnime'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cardAnime'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        try {
            // const response = await axios.get(`${API_BASE}/anime`);
            // anime = setAnime(response.data);


            await axios.get(`${API_BASE}/anime`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
                // .then(response => response.json(response.data))
                // .catch(err => res.json(err));

        } catch (err) {
            console.log(`Error: ${err}`)
        }
                    </CardActionArea>
                </Card> */}
            </div>
            {/* <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
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
                    style={{ textAlign: 'center' }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true
                        }
                    }}
                />
            </Box> */}
        </div>
    );
};

export default ViewAnimeList;
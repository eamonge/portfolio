import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {
    TablePagination,
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import { styled } from '@mui/system';

const BASE_URL = "http://localhost:5000";

function AnimeListComponent() {
    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //Calling anime API endpoint
    const getAnimes = async () => {
        fetch(BASE_URL + "/anime")
            .then(res => res.json())
            .then(data => setAnimes(data.data))
            .catch(err => console.log(`Error is: ${err}!`));
    };

    const rows = [animes].sort((a, b) => (a.calories < b.calories ? -1 : 1));

    useEffect(() => {
        getAnimes();
        console.log(`Total length of query iss: ${animes.length}`);
        console.log(rows);
    }, []);


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <div className='tableDivContent'>
                    <table>
                        <thead>
                            <tr>
                                <th>A</th>
                                <th>A</th>
                                <th>A</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Pagination currently under development */}
                            {/* {
                                (rowsPerPage > 0
                                 ? rows.slice(page.rowsPerPage, page * rowsPerPage + rowsPerPage)
                                 : rows
                                ).map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.canonicalTitle}</td>
                                        <td>{row.description}</td>
                                        <td>sdfsdfwegeqtgrtehg</td>
                                        <td><EditIcon /></td>
                                        <td><DeleteIcon /></td>
                                    </tr>
                                ))
                            } */}
                            {
                                animes.map(anim => (
                                    <tr>
                                        <td>{anim.id}</td>
                                        <td>{anim.attributes.canonicalTitle}</td>
                                        <td>{anim.attributes.description}</td>
                                        <td>sdfsdfwegeqtgrtehg</td>
                                        <td><EditIcon /></td>
                                        <td><DeleteIcon /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <CustomTablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={animes.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    slotProps={{
                                        select: {
                                            'aria-label': 'rows per page',
                                        },
                                        actions: {
                                            showFirstButton: true,
                                            showLastButton: true,
                                        },
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </Box>
        </div>
    );
};

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

export default AnimeListComponent;
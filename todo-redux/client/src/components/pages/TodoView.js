import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleVerified } from '../redux/completion';
// import { checkTodo, removeTodo, toggleVerified } from '../redux/todoSlice';
import { removeTodo, toggleVerified } from '../redux/completion';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import completion from '../redux/completion';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

// async function toggleData(id) {
//     dispatch(toggleVerified());
//     await sleep(2000);
//     dispatch(removeTodo(id));
// }


function TodoView() {
    const completed = useSelector((state) => state.completion);
    // const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    // const handleCheck = (id) => {
    //     dispatch(checkTodo(id))
    // }

    const completedAtr = () => {
        return false;
    }

    const handleToggle = () => {
        dispatch(toggleVerified());
    }

    const handleDelete = (id) => {
        // dispatch(toggleVerified());
        dispatch(removeTodo(id));
        // handleToggle();
    }

    const toggle = (idD) => {
        setTimeout(dispatch(removeTodo(idD)), 2000);

        // var names = completed.map(function(i) {
        //     return i.completed
        // } );
        // var rows = document.querySelectorAll('tr');

        // if (rows[idD].style.backgroundColor == "teal") {
        //     rows[idD].style.backgroundColor = "orange";
        // } else {
        //     rows[idD].style.backgroundColor = "teal"
        // };
        // var len = rows.length;
    }

    return (
        <div>
            <div className='todoview-div-content'>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Task Name</TableCell>
                                <TableCell align="right">s</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {completed.map((todo) => (
                                <TableRow className='contentRow'>
                                    <TableCell>{todo.id}</TableCell>
                                    <TableCell>{todo.title} is {todo.completed.toString()}</TableCell>
                                    <TableCell>{todo.completed.toString()}</TableCell>
                                    <TableCell>
                                        {/* <FormGroup>
                                            <FormControlLabel id='test' className='sampleLabel' control={<Checkbox />} onClick={() => {handleDelete(todo.id)}}/>
                                        </FormGroup> */}
                                        <Switch className='toggleBtn'
                                        onClick={ () => {handleDelete(todo.id)} } />
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <h1>Verified is {[completed[0].completed.toString()]}</h1> */}
                <Button variant="contained" className='btn btn-success'>Add todo</Button>
                <Button variant="contained" className='btn btn-warning'>Edit todo</Button>
            </div>
        </div>
    );
}

export default TodoView;
import React, { useState } from 'react'
import '../styles/searchbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../features/counter/searchSlice';

const Searchbar = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    const [localInput, setLocalInput] = useState(query || "");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            dispatch(setSearchQuery(localInput))
        }
    }

  return (
    <div>
        <input
            className='inputSearch'
            placeholder='Search city'
            type='text'
            value={localInput}
            onChange={(e) => setLocalInput(e.target.value)} //updates local input only
            onKeyDown={handleKeyDown} //Dispatches only on enter pressed
        />
    </div>
  )
}

export default Searchbar
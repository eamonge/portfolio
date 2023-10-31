import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/counter';
// import { decrement, increment } from '../../redux/counter';

function LandingMainComponent() {
    // "Take this variable from this redux state, particularly from our counter reducer and specificly the counter reducer "
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();



    return (
        <div style={{height: '85vh'}}>
            <h1>The count is: {count}!</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default LandingMainComponent;
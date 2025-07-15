import React from 'react'
import '../styles/itempopup.css'

const ItemPopup = (props) => {

    const closeBtn = (e) => {
        console.log(props.trigger);
    };

    return (props.trigger) ? (
        <div className="itemPopup-backdrop">
            <div className="itemPopup-content">
                <button onClick={(e) => {
                    e.stopPropagation();
                    props.setTrigger(false);
                }} className='borderlessBtn'>X</button>
                <h1>Item Name is: {props.itemId}</h1>
            </div>
        </div>
    ) : "";
}

export default ItemPopup
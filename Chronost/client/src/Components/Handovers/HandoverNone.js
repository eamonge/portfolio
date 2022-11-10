import React from 'react';

function HandoverNoneComponent(props) {
    const handovers = props.handovers;
    return (
        <div>
            {
                handovers.length === 0 && 
                <div>
                    <h1>
                        No Handover due!
                    </h1>
                </div>
            }
        </div>
    );
}

export default HandoverNoneComponent;
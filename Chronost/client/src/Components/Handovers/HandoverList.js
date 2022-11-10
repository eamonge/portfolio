import React from 'react';

function HandoverListComponent(props) {
    const handovers = props.handovers;
    return (
        <div>
            {
                handovers.length > 0 && 
                <div>
                    <h1>
                        Da handover list is: {handovers}
                    </h1>
                </div>
            }
        </div>
    );
}

export default HandoverListComponent;
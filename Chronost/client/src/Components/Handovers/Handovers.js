import React, { useState } from 'react';
// import Handove
import HandoverListComponent from './HandoverList';
import HandoverNoneComponent from './HandoverNone';
// import Hando

function HandoverComponent() {
    // const handovers = { "name": 's', "lastname": 's'};
    const handovers = ["sameple"]

    const [array, setArray] = useState(
        [
            // {
            //     "id": 1,
            //     "username": "elmo"
            // },
            // {
            //     "id": 2,
            //     "username": "elmo2"
            // },
            // {
            //     "id": 3,
            //     "username": "elmo3"
            // }
        ]
    )

    const test = () => array.map(a => {
        return(
            <div>
                <p>A</p>
            </div>
        )
    } 
    
    
    
    )



    // return(
    //     <div className='contentdiv'>
    //         {
    //             array?.map(arr => (
    //                 <h1>{arr.username}</h1>
    //             ))
    //         }
            
    //     </div>
    // )
    
}

export default HandoverComponent;

/*


{/* {
                handovers.length > 0 && 
                <h1>
                    <HandoverListComponent handovers={handovers} />
                </h1>
            }
            {
                handovers.length === 0 && 
                <h1>
                    <HandoverNoneComponent handovers={handovers}/>
                </h1>
            } }

*/
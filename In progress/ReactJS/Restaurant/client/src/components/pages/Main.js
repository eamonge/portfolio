import React from 'react';

function MainComponent() {
    var userName = "Elmo";
    var userNameVal = localStorage.getItem("userName");

    return(
        <div>
            <h1>Main component!</h1>
            <h3>Welcome {userNameVal}!</h3>
        </div>
    );
};

export default MainComponent;
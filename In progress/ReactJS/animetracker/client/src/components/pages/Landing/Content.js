import React from 'react';

function ContentComponent() {
    var userName = localStorage.getItem("userName");
    return(
        <div>
            <h1>Hello {userName}</h1>
        </div>
    );
};

export default ContentComponent;
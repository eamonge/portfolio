import React from 'react'
import '../styles/loading.css'

const LoadingComponent = () => {
    return (
        <div className="main-backDrop">
            <div className="loadingContent">
                <div className="loader">
                    <h1 style={{ position: 'absolute', top: '1em', left: '-1em' }}>Loading...</h1>
                </div>
            </div>
        </div>
    )
}

export default LoadingComponent
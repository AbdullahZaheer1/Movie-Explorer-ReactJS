import React from 'react'
import { Link } from 'react-router-dom';

function NoPage() {
    return (
        <div className='NoPage'>
            <h1>No Page Found</h1>
            <Link to={"/"}><button className="back-btn">Home</button></Link>
        </div>
    )
}

export default NoPage

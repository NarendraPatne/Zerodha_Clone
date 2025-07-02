import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
         <div className='container p-5 '>
            <div className='row text-center gap-3'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/">
                    <button style={{width:"25%"}} className='mx-auto p-3 btn btn-primary fs-5'>Go Home</button>
                </Link>
            </div>
       </div>
     );
}

export default NotFound;
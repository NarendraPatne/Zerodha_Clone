import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
function Education() {
    return ( 
       <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg'></img>
                </div>
                <div className='col'>
                    <h1 className='mb-4 fs-2'>Free and open market education</h1>
                    <p className='mb-4'>Varsity, the largest online stock market education book in the workd covering everything from the basics to advanced trading.</p>
                    <a className='mb-4' href='' style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mb-4 mt-4'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='mb-4' href='' style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>

                </div>
            </div>
       </div>
     );
}

export default Education;
import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href=''>Track Tickets</a>
            </div>
            <div className='container'>
                  <div className=' row p-2 mb-5'>
                <div className='col-7 p-3 mb-5'>
                    <h1 className='fs-3 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input type='text' className='w-100 p-3 mb-4 rounded border' placeholder='Eg. how do I activate F&O'/> <br></br>
                    <a className='lh-lg light fs-5 me-4 mt-2' href=''>Track account opening </a>
                    <a className='lh-lg light fs-5 me-4 mt-2' href=''>Track segment activation </a>
                    <a className='lh-lg light fs-5 me-4 mt-2' href=''>Intraday margins </a>
                    <a className='lh-lg light fs-5 me-4 mt-2' href=''>Kite user manual</a>
                </div>
                <div className='col-5 p-5 mb-5'>
                    <h1 className='fs-3 mb-4'>Featured</h1>
                    <p className='fs-5'>1. <a className=' light fs-5 me-4 mt-2' href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025 </a></p>
                    <p className='fs-5'>2. <a className=' light fs-5 me-4 mt-2' href=''>Revision in expiry day of Index and Stock derivatives contracts </a></p>
                </div>
            </div>
            </div>
        </section>
     );
}

export default Hero;
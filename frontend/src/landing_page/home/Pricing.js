import React from 'react';
function Pricing() {
    return ( 
        <div className='container mb-5 mt-5'>
            <div className='row mb-5'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbetable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat ffees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing</a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 p-2'>
                    <div className='row text-center'>
                        <div className='col p-2 border rounded mx-5'>
                            <h1 className='mb-3'>Rs 0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds.</p>
                        </div>
                        <div className='col p-4 border rounded'>
                            <h1 className='mb-3'>Rs 20</h1>
                            <p>Intraday and F&O </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
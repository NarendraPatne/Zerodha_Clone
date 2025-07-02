import React from 'react';
function Stats
() {
    return ( 
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 p-3'>
                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>
               
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>Thst's why 1.3+ crore customers trust Zerodha with Rs 3.5+ lakh crores worth of equity investments</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. Hign quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img className='ms-5 mt-5' style={{width:"80%"}} src='media/images/ecosystem.png'/>
                    <div className='text-center mt-4'>
                        <a className='me-5' style={{textDecoration:"none"}} href=''>Exphore our products</a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats
;
import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5 '>
            <div className='row text-center gap-3'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button style={{width:"25%"}} className='mx-auto p-3 btn btn-primary fs-5'>Signup now</button>
            </div>
       </div>
     );
}

export default Hero;
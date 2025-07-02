import React from 'react';
import Brokerage from './Brokerage';
import Hero from "./Hero"
import OpenAccount from '../OpenAccount';
function PricingPage() {
    return ( 
        <>
            <Hero></Hero>
            <OpenAccount/>
            <Brokerage></Brokerage>
        </>
     );
}

export default PricingPage;
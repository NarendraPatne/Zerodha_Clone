import React from 'react';
function Footer() {
    return ( 
       <footer style={{backgroundColor:"#FBFBFB"}} className='pt-2 border-top'>
         <div className='container mt-5' >
            <div className='row h-75'>
                <div className='col'>
                    <img src='media/images/logo.svg' className='w-75'></img>
                    <p className='mt-4'>© 2010 - 2025, Zerodha Broking Ltd. <br/> All rights reserved</p>
                </div>
                <div className='col'>
                    <p>Company</p>
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>About</a> <br/>
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Products</a> <br/> 
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Pricing</a> <br/> 
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Referral programme</a> <br/> 
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Careers</a> <br/> 
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Zerodha.tech</a> <br/> 
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Press & media</a> <br/> 
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Zerodha cares (CSR)</a> <br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Contact </a> <br/>
                    <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Support portal </a> <br/>
                    <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Z-Connect blog </a> <br/>
                    <a className='text-decoration-none text-muted mb-3 pb-4' href=''>List of charges </a> <br/>
                    <a className='text-decoration-none text-muted mb-3 pb-4' href=''>Downloads & resources</a> <br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                        <a href="">Open an account</a> <br></br>
                        <a href="">Fund transfer</a> <br></br>
                        <a className='text-decoration-none text-muted mb-3 pb-4' href=''>60 Days Challenge</a> <br></br>
                </div>
            </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
           <div className='d-flex  text-d p-6  justify-content-center align-items-center gap-3'>
              <a className='text-decoration-none text-muted p-3' href=''>NSE</a>
              <a className='text-decoration-none text-muted p-3' href=''>BSE</a>
              <a className='text-decoration-none text-muted p-3' href=''>MCX</a>
              <a className='text-decoration-none text-muted p-3' href=''>Terms & Conditions</a>
              <a className='text-decoration-none text-muted p-3' href=''>Policies & procedures</a>
              <a className='text-decoration-none text-muted p-3' href=''>Privacy Policy</a>
              <a className='text-decoration-none text-muted p-3' href=''>Disclosure</a>
            </div>
        </div>
        </div>
       </footer>
     );
}

export default Footer;
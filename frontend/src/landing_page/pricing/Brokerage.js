import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8 p-4 text-muted">
          <a href="" className="text-decoration-none text-center">
            <h4>Brokerage calculator</h4>
            </a>
            <ul className="mt-5 d-flex flex-column gap-3" style={{textAlign:"left"}}>
               <li> Call & Trade and RMS auto-squareoff: Additional charges of 250 +  GST per order.</li>
               <li> Digital contract notes will be sent via e-mail.</li>
               <li> Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li> 
               <li> For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower). </li>
               <li> For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
               <li> If the account is in debit balance, any order placed will be charged 240 per executed order instead of ₹20 per executed order.</li>
            </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" className="text-decoration-none">
            <h4>List of Charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

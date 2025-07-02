import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-3">
        <h1 className="fs-3 text-muted">
          To create a ticket, select a relevant topic
        </h1>
       <div className="col-4 p-5 mt-3">
       <h4 className=""><i class="fa-solid fa-square-plus me-2"></i>Account Opening</h4>
           <div className="ms-4">
             <a href="" className="text-decoration-none lh-lg">Resident individual</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Minor</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Non Resident Indian (NRI)</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Company, Partnership, HUF and LLP</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Glossary</a> <br/>
           </div>
      </div>
       <div className="col-4 p-5  mt-3">
       <h4 className=""><i class="fa-solid fa-user me-2"></i> Your Zerodha Account</h4>
           <div className="ms-5">
                <a href="" className="text-decoration-none lh-lg">Your Profile</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Account modification</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Client Master Report (CMR) and Depository Participant (DP)</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Nomination</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Transfer and conversion of securities</a> <br/>
           </div>
      </div>
       <div className="col-4 p-5  mt-3">
       <h4 className=""><i class="fa-solid fa-chart-simple me-2"></i>Kite</h4>
           <div className="ms-4">
                <a href="" className="text-decoration-none lh-lg">IPO</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Trading FAQs</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Margin Trading Facility (MTF) and Margins</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Charts and orders</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Alerts and Nudges</a> <br/>
                <a href="" className="text-decoration-none lh-lg">General</a> <br/>
           </div>
         </div>
       <div className="col-4 p-5 mb-5">
       <h4 className=""><i class="fa-solid fa-credit-card me-2"></i>Funds</h4>
           <div className="ms-4">
             <a href="" className="text-decoration-none lh-lg">Add Money </a> <br/>
            <a href="" className="text-decoration-none lh-lg">Winthdraw Money</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Add bank accounts</a> <br/>
            <a href="" className="text-decoration-none lh-lg">eMandates</a> <br/>
           </div>
         </div>
       <div className="col-4 p-5 mb-5">
       <h4 className=""><i class="fa-solid fa-circle-notch me-2"></i>Console</h4>
           <div className="ms-4">
                <a href="" className="text-decoration-none lh-lg">Portfolio</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Corporate actions</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Funds statement</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Reports</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Profile</a> <br/>
                <a href="" className="text-decoration-none lh-lg">Segments</a> <br/>
           </div>
         </div>
       <div className="col-4 p-5 mb-5">
       <h4 className=""><i class="fa-solid fa-coins me-2"></i>Coin</h4>
           <div className="ms-4">
             <a href="" className="text-decoration-none lh-lg">Mutual Funds</a> <br/>
             <a href="" className="text-decoration-none lh-lg">National Pension Scheme</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Features on Coin</a> <br/>
            <a href="" className="text-decoration-none lh-lg">Payments and Orders</a> <br/>
            <a href="" className="text-decoration-none lh-lg">General</a> <br/>
           </div>
         </div>
      </div>
    </div>
  );
}

export default CreateTicket;

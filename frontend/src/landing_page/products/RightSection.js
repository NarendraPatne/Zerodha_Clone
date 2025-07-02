import React from 'react';
function RightSection({
  imageUrl,
  productName,
  productDescription,
 link
}) {
     return (
    <div className="container pt-5 mt-5">
        <div className="row my-5">
            <div className="col-4">
                <h1>{productName} </h1>
                <p className="mt-5 fs-5">{productDescription}</p>
                <div className="p-4">
                    <a href={link} className="text-decoration-none fs-5 fw-medium">Learn More →</a>
                </div>
            </div>
            <div className="col-8 ">
                <img src={imageUrl} className="ps-5 ms-5"/>
            </div>
        </div>
    </div>
  );
}

export default RightSection;
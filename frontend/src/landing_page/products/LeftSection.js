import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pt-5 mt-5">
        <div className="row my-5">
            <div className="col-8 ">
                <img src={imageUrl} className="ps-5 ms-5"/>
            </div>
            <div className="col-4">
                <h1>{productName} </h1>
                <p className="mt-5 fs-5">{productDescription}</p>
                <div className="p-4">
                    <a href={tryDemo} className="text-decoration-none fs-5 fw-medium">Try Demo →</a>
                <a href={learnMore} className="ms-5 text-decoration-none fs-5 fw-medium">Learn More →</a>
                </div>
               <div className="p-2">
                 <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg"/>
                </a>
                <a href={appStore}>
                    <img className="ms-5" src="media/images/appstoreBadge.svg"/>
                </a>
               </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;

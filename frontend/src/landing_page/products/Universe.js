const Universe = () => {
  return (
    <div className="container mt-5 pt-5 text-center">
      <h1>The Zerodha Universe</h1>
      <p className="my-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row p-5 pb-1">
        <div className="col-4 p-3">
          <img style={{width:"230px",marginBottom:"20px"}} src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{width:"230px",marginBottom:"20px"}} src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{width:"230px",marginBottom:"20px"}} src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3  my-5">
          <img style={{width:"230px",marginBottom:"20px"}} src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 my-5">
          <img style={{width:"230px",marginBottom:"20px"}} src="media/images/dittoLogo.png" />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3 my-5">
          <img style={{width:"230px",marginBottom:"20px"}} src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">
          Bonds trading platform.
          </p>
        </div>
      </div>
         <button style={{width:"25%"}} className='mx-auto p-3 mb-5 btn btn-primary fs-5'>Sign up now for free</button>
    </div>
  );
};

export default Universe;

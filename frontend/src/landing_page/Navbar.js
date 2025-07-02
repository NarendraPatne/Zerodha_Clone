import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
            <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
                <div class="container p-2">
                    <Link class="navbar-brand" href="#" to="/">
                        <img className='' style={{width:"30%"}} src='media/images/logo.svg' alt="logo"></img>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form class="d-flex" role="search">
                       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link fw-medium fs-6 text-muted" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link fw-medium fs-6 text-muted" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link fw-medium fs-6 text-muted" to="/product">Products</Link>
                        </li>
                        <li class="nav-item">
                         <Link class="nav-link fw-medium fs-6 text-muted" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                       <Link class="nav-link fw-medium fs-6 text-muted" to="/support">Support</Link>
                        </li>
                    </ul>
                    </form>
                    </div>
                </div>
            </nav>
     );
}

export default Navbar;
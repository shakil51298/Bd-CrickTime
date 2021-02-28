import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navbar = (props) => {
    const logo = props.logo
    return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <img className="navbar-brand ml-3" src={logo} alt="" style={{width:"50px"}}/>
                    <h3 className="navbar-brand " >Bdcrick Time</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;
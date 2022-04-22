import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">Desitation</Link>
                    <Link className="nav-link" to="/hotel">Hotel</Link>
                    <Link className="nav-link" to="/fights">Fights</Link>
                    <Link className="nav-link" to="/booking">Bookings</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/sign-up">Sign Up</Link>

                  
                </div>
                </div>
            </div>
            </nav>
                        
        </div>
    );
};

export default Header;
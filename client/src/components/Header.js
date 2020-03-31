import React from 'react';
import axios from 'axios';

const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <a 
                    href="/" 
                    className="left brand-logo"
                >
                    Travel Logger
                </a>
                <a className="right" href="/auth/google">Login with Google</a>
            </div>
        </nav>
    );
}

export default Header;
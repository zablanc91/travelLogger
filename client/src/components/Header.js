import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    //helper function to change header depending if user is logged in
    const renderContent = () => {
        switch(props.auth){
            case null:
                return;
            case false:
                return(
                    <a className="right" href="/auth/google">Login with Google</a>
                );
            default:
                return(
                    <a className="right" href="api/logout">Logout</a>
                );
        }
    }

    return(
        <nav>
            <div className="nav-wrapper">
                <a 
                    href="/" 
                    className="left brand-logo"
                >
                    Travel Logger
                </a>
                {renderContent()}
            </div>
        </nav>
    );
}

//deconstruct the state to pull out auth reducer, add to props
const mapStateToProps = ({auth}) => {
    return {auth};
}

export default connect(mapStateToProps)(Header);
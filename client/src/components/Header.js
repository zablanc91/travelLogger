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
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <a href="/add">Add Entry</a>
                        </li>
                        <li>
                            <a href="/api/logout">Logout</a>
                            </li>
                    </ul>
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
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
                    <>
                        <li>
                            <a href="/logs">
                                Logs
                            </a>
                        </li>
                    <li>
                            <a href="/auth/google">Login with Google</a>
                        </li>
                    </>
                );
            default:
                return(
                    <>
                        <li>
                            <a href="/logs">Logs</a>
                        </li>
                        <li>
                            <a href="/add">Add Entry</a>
                        </li>
                        <li>
                            <a href="/api/logout">Logout</a>
                        </li>
                    </>
                );
        }
    }

    return(
        <nav>
            <div className="nav-wrapper teal">
                <a 
                    href="/" 
                    className="left brand-logo"
                >
                    Travel Logger
                </a>
                <ul className="right" >
                    {renderContent()}
                </ul>
                
            </div>
        </nav>
    );
}

//deconstruct the state to pull out auth reducer, add to props
const mapStateToProps = ({auth}) => {
    return {auth};
}

export default connect(mapStateToProps)(Header);
import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to="/logs">
                                Logs
                            </Link>
                        </li>
                        <li>
                            <a href="/auth/google" >
                                Login with Google
                            </a>
                        </li>
                    </>
                );
            default:
                return(
                    <>
                        <li>
                            <Link to="/logs">Logs</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Entry</Link>
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
                <Link to="/" className="left brand-logo">
                    Travel Logger
                </Link>
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
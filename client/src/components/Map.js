import React from 'react';
//import { fetchLogs } from '../actions';
import { connect } from 'react-redux';

const Map = (props) => {
    return (
        <div>
            {props.logs.map(log => {
                return(
                    <p>{log.name}</p>
                );
            })}
        </div>
    );
}

const mapStateToProps = ({ logs }) => {
    return { logs };
}

export default connect(mapStateToProps)(Map);
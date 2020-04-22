import React from 'react';
import { connect } from 'react-redux';
import { fetchLogs } from '../actions';
import { Link } from 'react-router-dom';

class ListLogs extends React.Component{

    componentDidMount(){
        this.props.fetchLogs();
    }

    trimString(logString){
        let maxStrLen = 40;
        let trimmedString = logString.length > maxStrLen ? logString.substring(0, maxStrLen - 3) + "..." : logString;

        return trimmedString;
    }

    //helper to convert log name for URL to direct to its individual page
    nameToURLString(name){
        return name.split(' ').join('_');
    }

    render() {
        return(
            <div className="row" >
                {this.props.logs.map(log => {
                    return(
                        <div className="col s12 m6">
                            <Link to={`/logs/${this.nameToURLString(log.name)}`} >
                                <div className="card" > 
                                    <div className="card-image">
                                    <img src={`/uploads/${log.image}`} alt={log.name} />
                                        <span className="card-title">{log.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>
                                            {this.trimString(log.description)}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ logs}) => {
    return { logs };
}

export default connect(mapStateToProps, {fetchLogs})(ListLogs);
import React from 'react';
import { connect } from 'react-redux';
import { fetchLogs } from '../actions';
//

class ListLogs extends React.Component{

    componentDidMount(){
        this.props.fetchLogs();
    }

    trimString(logString){
        let maxStrLen = 40;
        let trimmedString = logString.length > maxStrLen ? logString.substring(0, maxStrLen - 3) + "..." : logString;

        return trimmedString;
    }

    render() {
        return(
            <div className="row" >
                {this.props.logs.map(log => {
                    return(
                        <div className="col s12 m6">
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
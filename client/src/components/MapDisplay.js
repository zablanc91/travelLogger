import React from 'react';
import { connect } from 'react-redux';
import { mapboxToken } from '../config/googleKeys';
import { changeViewport, fetchLogs, setSelectedLog } from '../actions/';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './index.css';
import { Link } from 'react-router-dom';

class MapDisplay extends React.Component{
    componentDidMount(){
        this.props.fetchLogs();
    }

    //display markers on map for each log, on click set as selected log for to display popup
    renderMarkers(){
        return this.props.logs.map((log) => {
            return(
                <Marker 
                    latitude={log.location.coordinates[1]} 
                    longitude={log.location.coordinates[0]} 
                    key={log._id} >
                        <button className="marker-btn" onClick={(e) => {
                            e.preventDefault();
                            this.props.setSelectedLog(log);
                        }} >
                            <span>✈</span>
                        </button>
                </Marker>
            );
        });
    }

    renderPopup(){
        return(
            <Popup latitude={this.props.selectedLog.location.coordinates[1]} longitude={this.props.selectedLog.location.coordinates[0]} 
            closeOnClick={false}
            onClose={() => {
                this.props.setSelectedLog(null);
            }}
            
            >
                <div>
                    <Link to={`/logs/${this.props.selectedLog.name.split(" ").join("_")}`} onClick={() => {this.props.setSelectedLog(null)}} 
                    >
                        <p className="popup_title" >
                            {this.props.selectedLog.name}
                        </p>
                    </Link>
                    <p>
                        {this.props.selectedLog.description}
                    </p>        
                </div>
            </Popup>
        );
    }

    render() {
        
        return (            
            <div style={{width: '100%', border: '1px solid black'}}>
                <ReactMapGL 
                    {...this.props.viewport} 
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={newViewport => {this.props.changeViewport(newViewport)}}
                >
                    {this.props.length !== 0 ? this.renderMarkers(): null}

                    {this.props.selectedLog ? this.renderPopup() : null}
                    
                    {this.props.viewport.latitude}
                    <br />
                    {this.props.viewport.longitude}
                </ReactMapGL>
            </div>     
        );
    }
}

const mapStateToProps = ({ logs, viewport, selectedLog }) => {
    return { logs, viewport, selectedLog };
}

export default connect(mapStateToProps, {changeViewport, fetchLogs, setSelectedLog})(MapDisplay);
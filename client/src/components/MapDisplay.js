import React from 'react';
import { connect } from 'react-redux';
import { mapboxToken } from '../config/googleKeys';
import { changeViewport, fetchLogs } from '../actions/';
import ReactMapGL, { Marker } from 'react-map-gl';
import './index.css';

class MapDisplay extends React.Component{
    componentDidMount(){
        this.props.fetchLogs();
    }

    render() {
        if(this.props.logs.length === 0 ){
            return(
                <div>
                    Loading...
                </div>
            );
        }
        return (            
            <div style={{width: '100%', border: '1px solid black'}}>
                <ReactMapGL 
                    {...this.props.viewport} 
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={newViewport => {this.props.changeViewport(newViewport)}}
                >
                    {this.props.logs.map((log) => {
                        return(
                            <Marker 
                                latitude={log.location.coordinates[1]} 
                                longitude={log.location.coordinates[0]} 
                                key={log._id} >
                                    <button className="marker-btn" >
                                        <span>✈</span>
                                    </button>
                            </Marker>
                        );
                    })}
                    
                    {this.props.viewport.latitude}
                    <br />
                    {this.props.viewport.longitude}
                </ReactMapGL>
            </div>     
        );
    }
}

const mapStateToProps = ({ logs, viewport }) => {
    return { logs, viewport };
}

export default connect(mapStateToProps, {changeViewport, fetchLogs})(MapDisplay);
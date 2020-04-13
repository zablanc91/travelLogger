import React from 'react';
import { connect } from 'react-redux';
import { mapboxToken } from '../config/googleKeys';
import { changeViewport } from '../actions/';
import ReactMapGL from 'react-map-gl';

class MapDisplay extends React.Component{
    render() {
        return (            
            <div style={{width: '100%', border: '1px solid black'}}>
                <ReactMapGL 
                    {...this.props.viewport} 
                    mapboxApiAccessToken={mapboxToken}
                    onViewportChange={newViewport => {this.props.changeViewport(newViewport)}}
                >
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


export default connect(mapStateToProps, {changeViewport})(MapDisplay);
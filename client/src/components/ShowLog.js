import React from 'react';
import { connect } from 'react-redux';
import { getLogBySlug } from '../actions';

class ShowLog extends React.Component{
    componentDidMount(){
        const { slug } = this.props.match.params;
        this.props.getLogBySlug(slug);
    }

    render() {
        if(this.props.matchedLog === null){
            return (
                <div>
                    Loading...
                </div>
            )
        }

        let {name, description, location, image} = this.props.matchedLog;

        return (
            <div>
                <h3 className="log_header">{name}</h3>

                <div className="row">
                    <div className="log_text col s12 m6">
                        <p> {location.address} </p>
                        <p>{description} </p>
                    </div>
                    <div className="log_img col s12 m6">
                        <img src={`/uploads/${image}`} alt={`picture of ${name}`} />
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = ({ matchedLog }) => {
    return { matchedLog };
}

export default connect(mapStateToProps, { getLogBySlug } )(ShowLog);
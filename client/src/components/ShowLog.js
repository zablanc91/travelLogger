import React from 'react';
import { connect } from 'react-redux';
import { getLogBySlug } from '../actions';
import { Link } from 'react-router-dom';

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

        let {slug} = this.props.match.params;
        let {name, description, location, image, _id} = this.props.matchedLog;

        return (
            <div>
                <h3 className="log_header">{name}</h3>

                <div className="row">
                    <div className="log_text col s12 m6">
                        <p> {location.address} </p>
                        <p>{description} </p>
                        <button>
                            <Link to={
                                {
                                    pathname: `/logs/${slug}/edit`,
                                    formProps: {
                                        name,
                                        description,
                                        image,
                                        address: location.address,
                                        latitude: location.coordinates[1],
                                        longitude: location.coordinates[0],
                                        log_id: _id
                                    }
                                }

                            }>
                                Edit
                            </Link>
                        </button>
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
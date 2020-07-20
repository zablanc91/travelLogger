import React from 'react';
import { connect } from 'react-redux';
import { getLogBySlug } from '../actions';
import { Link } from 'react-router-dom';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';

class ShowLog extends React.Component{
    componentDidMount(){
        const { slug } = this.props.match.params;
        this.props.getLogBySlug(slug);
        M.Modal.init(this.Modal);
    }

    //allow only the user who created these logs to edit or delete
    renderUserOptions() {
        let {slug} = this.props.match.params;
        let {name, description, location, image, _id, author} = this.props.matchedLog;

        if(this.props.auth._id != author){
            return null;
        }
        return (
            <div>
                <button className="log_button" >
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

                <button>
                    <a className="modal-trigger" data-target="log_modal"
                                >
                        Delete
                    </a>
                </button>

                <div ref={Modal => {this.Modal = Modal;}} id="log_modal" className="modal" >    
                    <div className="modal-content">
                        <h4>Delete this log?</h4>
                    </div>
                    <div className="modal-footer">
                        <Link className="waves-effect waves-red btn-flat" to="/" onClick={() => this.handleDelete(slug) } >
                            Delete
                        </Link>    
                        
                        <p className="modal-close waves-effect waves-green btn-flat">
                            Close
                        </p>
                    </div>
                </div>
                            
            </div>
        );
    }

    //make the API call to our backend to delete the log
    handleDelete = async (slug) => {
        let toDel = '/api/logs/' + slug + '/delete';
        await axios.delete(toDel);
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
                        {this.renderUserOptions()}
                        
                    </div>

                    <div className="log_img col s12 m6">
                        <img src={`/uploads/${image}`} alt={`picture of ${name}`} />
                    </div>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = ({ matchedLog, auth }) => {
    return { matchedLog, auth };
}

export default connect(mapStateToProps, { getLogBySlug } )(ShowLog);
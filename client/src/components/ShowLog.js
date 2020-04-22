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
        return (
            <div>
                {this.props.matchedLog.name}
            </div>
        );
    }
}

const mapStateToProps = ({ matchedLog }) => {
    return { matchedLog };
}

export default connect(mapStateToProps, { getLogBySlug } )(ShowLog);
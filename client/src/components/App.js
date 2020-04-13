import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchUser, fetchLogs } from '../actions';
import AddLog from './AddLog';
import MapDisplay from './MapDisplay';


class App extends React.Component{
    //call our action to set state (user logged in?, get logs) 
   componentDidMount(){
       this.props.fetchUser();
       this.props.fetchLogs();
   }

    render(){
        return (
            <div className="container">
                <Header />
                <BrowserRouter>
                    <Route exact path='/add' component={AddLog} />
                    <Route exact path='/' component={MapDisplay} />
                </BrowserRouter>
            </div>
        );
    }
};

//no need for reducers with mapStateToProps so null arg, add actions to props
export default connect(null, {fetchUser, fetchLogs})(App);
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchUser} from '../actions';
import AddLog from './AddLog';
import ListLogs from './ListLogs';
import MapDisplay from './MapDisplay';
import 'mapbox-gl/dist/mapbox-gl.css';


class App extends React.Component{
    //call our action to set state (user logged in?) 
   componentDidMount(){
       this.props.fetchUser();
   }

    render(){
        return (
            <div className="container">
                <Header />
                <BrowserRouter>
                    <Route exact path='/add' component={AddLog} />
                    <Route exact path='/' component={MapDisplay} />
                    <Route exact path='/logs' component={ListLogs} />
                </BrowserRouter>
            </div>
        );
    }
};

//no need for reducers with mapStateToProps so null arg, add actions to props
export default connect(null, {fetchUser})(App);
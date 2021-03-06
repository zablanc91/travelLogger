import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchUser} from '../actions';
import AddLog from './AddLog';
import ListLogs from './ListLogs';
import MapDisplay from './MapDisplay';
import 'mapbox-gl/dist/mapbox-gl.css';
import ShowLog from './ShowLog';


class App extends React.Component{
    //call our action to set state (user logged in?) 
   componentDidMount(){
       this.props.fetchUser();
   }

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/add' component={AddLog} />
                        <Route exact path='/' component={MapDisplay} />
                        <Route exact path='/logs' component={ListLogs} />
                        <Route exact path='/logs/:slug' component={ShowLog} />
                        <Route exact path='/logs/:slug/edit' component={AddLog} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

//no need for reducers with mapStateToProps so null arg, add actions to props
export default connect(null, {fetchUser})(App);
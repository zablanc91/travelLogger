import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Landing = () => <h3>Landing</h3>;

class App extends React.Component{
    //call our action to set state by checking to see if a user is logged in 
   componentDidMount(){
       this.props.fetchUser();
   }

    render(){
        return (
            <div className="container">
                <Header />
                <BrowserRouter>
                    <Route exact path='/' component={Landing} />
                </BrowserRouter>
            </div>
        );
    }
};

//no need for reducers with mapStateToProps so null arg, add actions to props
export default connect(null, actions)(App);
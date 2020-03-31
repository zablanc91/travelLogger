import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

const Landing = () => <h3>Landing</h3>;

const App = () => {
    return (
        <div className="container">
            <Header />
            <BrowserRouter>
                <Route exact path='/' component={Landing} />
            </BrowserRouter>
        </div>
    );
};

export default App;
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Event from './Event';
import Organization from './Organization';
import Home from './Home';
import Category from './Category';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/organization" component={Organization}/>
                <Route path="/event" component={Event}/>
                <Route path="/category" component={Category}/>
            </Switch>
        );
    }
}

export default Main;
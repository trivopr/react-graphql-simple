import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Songlist from './Songlist';
import Home from './Home';
import CreateSong from './CreateSong';
import SongDetail from './SongDetail';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/songs" component={Songlist} />
                    <Route path="/song/create" component={CreateSong} />        
                    <Route path="/song/:id" component={SongDetail} />        
                </Switch>
            </div>
        );
    }
}

export default Main;
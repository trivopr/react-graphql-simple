import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { fetchSongById } from '../queries';

class SongDetail extends Component {
    
    render() {
        let idSong = this.props.match.params.id;
        console.log('idSong:', this.props);

        return (
            <div>
                <h1>WELCOME TO SONG DETAIL</h1>
            </div>
        );
    }
}

export default graphql(fetchSongById, {
    options: (props) => { return { variables: { id : props.match.params.id } } }
})(SongDetail);

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { fetchAllSongs } from '../queries';
import { Link } from "react-router-dom";

class Songlist extends Component {

    componentDidMount () {
        console.log("didmount");
    }

    handleDeleteSong(id) {
        this.props.mutate({
            variables: {
                "id": id
            },
            refetchQueries: [{query: fetchAllSongs}]
        });

    }

    renderSongs() {
        console.log("render Songs", this.props.data.songs);
        
        let songData = this.props.data.songs.map((item) => {
            return <li key={item.id}>
                        <Link to={`/song/${item.id}`}>
                            {item.title}
                        </Link>
                        <i className="material-icons" onClick={(e) => this.handleDeleteSong(item.id)}>delete</i>
                    </li>
        });

        return songData;
    }

    render() {
        let { loading } = this.props.data;

        if (loading) { return <div>Loading...</div> }

        return (
            <ul>
                { this.renderSongs() }
            </ul>
        );
    }
}


const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }`;

export default graphql(mutation)(graphql(fetchAllSongs)(Songlist));

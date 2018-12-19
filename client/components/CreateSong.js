import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router';
import { fetchAllSongs } from '../queries';


class CreateSong extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
    }

    handleInputChange (e) {
        let val = e.target.value;
        this.setState({title: val});
    }

    handleAddSongTitle (e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                "title": this.state.title
            },
            refetchQueries: [{query: fetchAllSongs}]
        }).then(() => <Redirect to="/" />);
    }



    render() {
        return (
            <div>
                <h3>CREATE A NEW SONG</h3>
                <form onSubmit= {(e) => this.handleAddSongTitle(e)}>
                    <label>Song Title:</label>
                    <Input onChange = {event => this.handleInputChange(event)} value={this.state.title} />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation)(CreateSong);

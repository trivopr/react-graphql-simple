import gql from 'graphql-tag';

export const fetchAllSongs = gql`
    {
        songs {
            id
            title
        }
    }
`;

export const fetchSongById = gql`
    query FetchSongById($id: ID!) {
        song(id:$id) {
            id
            title
        }
    }
`;
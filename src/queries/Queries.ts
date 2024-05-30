import { gql } from "urql";

export const GET_POSTS = gql`
    query {
        posts {
            data {
                id
                title
            }
        }
    }
`;

export const GET_POST = gql`
    query GetPost($id: ID!) {
        post(id: $id) {
            id
            title
            body
        }
    }
`;

export const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            username
            email
            address {
                geo {
                    lat
                    lng
                }
            }
        }
    }
`;
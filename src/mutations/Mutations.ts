import { gql } from "urql";

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $body: String!) {
        createPost(input: { title: $title, body: $body }) {
            id
            title
            body
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $body: String!) {
        updatePost(id: $id, input: { body: $body }) {
            id
            body
        }
    }
`;

export const DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
        deletePost(id: $id)
    }
`;
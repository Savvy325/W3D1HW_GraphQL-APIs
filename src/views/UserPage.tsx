import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries/Queries";
import { Alert, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: id },
    });

    if (loading)
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );

    if (error)
        return (
            <Alert variant="danger">
                <Alert.Heading>Oh No! An Error has occurred!</Alert.Heading>
                <p>{error.message}</p>
            </Alert>
        );

    const { username, email, address } = data.user;

    return (
        <Card.Body>
            <Card.Text>{username}</Card.Text>
            <Card.Text>{email}</Card.Text>
            <Card.Text>{address.geo.lat}</Card.Text>
            <Card.Text>{address.geo.lng}</Card.Text>
        </Card.Body>
    );
};

export default UserPage;
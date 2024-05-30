import { useQuery } from "@apollo/client";
import { GET_POST } from "../queries/Queries";
import { Alert, Card, Container, Row, Spinner, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import UserPage from "./UserPage";

const PostsPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
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

  const { title, body } = data.post;

  return (
    <Container>
      <h1>Post</h1>
      <Row>
        <Card key={id}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <UserPage />
            <Card.Text>{body}</Card.Text>
            <Link to={"/"}>
              <Button variant="primary">Back to Posts</Button>
            </Link>
            <Link to={`/post/${id}`}>
              <Button variant="primary">Update</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default PostsPage;

import React from "react";
import { useParams, Link } from "react-router-dom";
import postdata from "../postdata";
import { Card, Button } from "react-bootstrap";
import "./Post.css";

const Post = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => p.title === postId);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    /*  <div>
      <div class="image">
        <img src={post.img} alt={post.title} />
      </div>

      <div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <Link to="/blog">Back to Blog page</Link>
      </div>
    </div> */
  );
};

export default Post;

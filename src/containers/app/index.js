import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { newBlog, removePost, editPost } from "../../redux/actions/blog";

import Posts from "./list";

function Blog(props) {
  const [state, setState] = useState({
    title: null,
    content: null,
  });

  const handleOnChange = (key, e) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    props.newBlog(state);
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleOnChange("title", e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => handleOnChange("content", e)}
          />
        </Form.Group>
        <Button className="mb-5" variant="primary" onClick={handleOnSubmit}>
          Submit
        </Button>
      </Form>

      <Posts
        newBlog={props.newBlog}
        blog={props.blog}
        removePost={props.removePost}
        onEditPost={props.editPost}
      />
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newBlog: (blog) => dispatch(newBlog(blog)),
    removePost: (id) => dispatch(removePost(id)),
    editPost: payload => dispatch(editPost(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);

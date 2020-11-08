// import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { newBlog } from '../../redux/actions/blog';

import Posts from './list';

function Blog(props) {
  // const [state, setState] = useState({
  //   title: null,
  //   content: null,
  // });

 

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="tite"/>
          </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={3} name='content'/>
        </Form.Group>
      </Form>

      <Posts/>
    </Container>
  );
}


function mapStateToProps(state) {
    return {
      name: state.blog
    }
  }


   
  function mapDispatchToProps(dispatch) {
    return {
    newBlog: state => dispatch(newBlog(state.blog))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Blog);

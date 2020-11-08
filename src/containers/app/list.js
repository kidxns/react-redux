import { ListGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { newBlog } from "../../redux/actions/blog";

const Posts = (props) => {

  console.log("props", props);

  const List = props.blog.posts.map(
    (post) => {
        return (
        <ListGroup.Item key={post.id} className='rounded-0'>

        <Row className='mt-3'>
            <Col md={12}>
                {post.title}
            </Col>
            <Col md={12}>
                {post.content}
            </Col>
        </Row>

        
    </ListGroup.Item>)

    }
);



  return (
    <ListGroup>
      <p> This is List</p>
      {List}
    </ListGroup>
  );
};





function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newBlog: (state) => dispatch(newBlog(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

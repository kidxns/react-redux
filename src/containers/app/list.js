import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import EditModal from "../../views/posts/editPost";

const Posts = (props) => {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});

  const onShow = (record = {}) => {
    setShow(!show);

    setDetail(record);
  };

  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.blog.posts &&
            props.blog.posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => onShow(post)}
                        >
                          Edit
                        </Button>
                      </li>
                      <li className="list-inline-item">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => props.removePost(post.id)}
                        >
                          Remove
                        </Button>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <EditModal
        show={show}
        detail={detail}
        onClose={onShow}
        onEditPost={props.onEditPost}
      />
    </React.Fragment>
  );
};

export default Posts;

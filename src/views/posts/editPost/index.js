import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditPost = ({
  show,
  detail = { title: null, content: null },
  onClose,
  onEditPost,
}) => {
  const [record, setRecord] = useState(detail);

  useEffect(() => {
    setRecord(detail);
  }, [detail]);

  const handleChange = (key, event) => {
    setRecord({
      ...record,
      [key]: event.target.value,
    });
  };
  
  const handleSave = () => {
    onEditPost(record)
    setTimeout(() => {
      onClose()
    }, 500);
  }

  console.log("onEditPost", onEditPost);

  return (
    <Modal show={show} onHide={() => onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={record.title}
            onChange={(e) => handleChange("title", e)}
          />
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter content"
            value={record.content}
            onChange={(e) => handleChange("content", e)}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => onClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPost;

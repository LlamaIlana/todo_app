import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo, markedCompleted, editToDo } from "./createSlice";
import edit from "./img/edit.png";
import remove from "./img/delete.png";
import add from "./img/add.png";
import done from "./img/done.png";
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function ToDoList() {
  const [input, setInput] = useState("");
  const [newContent, setNewContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const todos = useSelector((state) => state.toDo.list);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  // Handle Edit
  const handleShow = (index, content) => {
    setEditingIndex(index);
    setNewContent(content);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSave = () => {
    if (newContent.trim()) {
      dispatch(editToDo({ index: editingIndex, newValue: newContent }));
      handleClose();
    }
  };

  // Handle adding a new item
  const handleAddToDo = () => {
    if (input.trim()) {
      dispatch(addToDo(input));
      setInput("");
      setAlertVisible(false);
    } else {
      setAlertVisible(true);
    }
  };

  // Handle Enter Key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddToDo();
    }
  };

  // Handle removing a item
  const handleRemoveToDo = (todo) => {
    dispatch(removeToDo(todo));
  };

  // Handle completed item
  const handleDone = (content) => {
    dispatch(markedCompleted(content));
  };

  return (
    <div>
      {/* Add item input */}
      <input
        type="text"
        className="todolist"
        placeholder="Enter a Todo"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown} // Event listens for key presses
      />
      <button className="btn" onClick={handleAddToDo} title="Add item to list.">
        <img src={add} alt="add" style={{ width: "35px", height: "35px" }} />
      </button>

      {/* Conditionally render the alert */}
      {alertVisible ? (
        <Alert variant="danger">Please enter a To-do!</Alert>
      ) : null}

      <h2>Your To Do List:</h2>
      <div className="list-display">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {/* Display item content with conditional class for completion */}
              <span className={todo.completed ? "completed" : ""}>
                {todo.content}
              </span>
              {/* Remove Todo button */}
              <button
                className="btn btn-2"
                title="Remove item from list."
                onClick={() => handleRemoveToDo(todo.content)}>
                <img
                  src={remove}
                  alt="remove"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
              {/* Show Mark Done and Edit buttons only if Todo is not completed */}
              {!todo.completed ? (
                <>
                  <button
                    className="btn btn-2"
                    onClick={() => handleDone(todo.content)}>
                    <img
                      src={done}
                      alt="Done"
                      style={{ width: "20px", height: "20px" }}
                      title="Mark item as completed"
                    />
                  </button>

                  <button
                    className="btn btn-2"
                    onClick={() => handleShow(index, todo.content)}>
                    <img
                      title="Edit item from list."
                      src={edit}
                      alt="edit"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                </>
              ) : null}{" "}
              {/* If completed, render nothing (null) */}
            </li>
          ))}
        </ul>

        {/* Edit Modal Bootstrap*/}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Make Changes to Your Todo Item:</Form.Label>
                <Form.Control
                  type="text"
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

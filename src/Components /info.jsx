import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//Modal from React Bootstrap

export default function Info(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Info Section{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {" "}
          How to Use the To-Do List Application<br></br>
          <br></br>
        </h4>
        <p>
          1. Adding Items:<br></br>
          <br></br>
          To add a new item to your to-do list, type your task in the input box
          and click the Add button (Add). The item will be added to the list,
          and you can start tracking it.<br></br>
          <br></br>
          2. Editing Items: <br></br>
          <br></br>
          If you want to modify an existing item, click the Edit button (Edit)
          next to the task. Update the task description, then save your changes.
          <br></br>
          <br></br>
          3. Marking Items as Completed:<br></br>
          <br></br>
          To mark an item as completed, click the Completed button (Completed).
          The task will be crossed out with a strikethrough. You can always undo
          this by clicking the Completed button again. <br></br>
          <br></br>
          4. Deleting Items:
          <br></br>
          <br></br>
          If you want to remove an item from the list, click the Delete button
          (Delete) next to the task. This will permanently delete the item from
          your list.<br></br>
          <br></br>
          5. Tracking Your Progress:<br></br>
          <br></br>
          The to-do counter at the top shows how many tasks are remaining. This
          counter will update as you mark items as completed or delete them.
          <br></br>
          <br></br>
          Enjoy staying organized with your to-do list!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

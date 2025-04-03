import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/Store.jsx";
import ToDoList from "./Components /toDoList.jsx";
import Counter from "./Components /Counter.jsx";
import Info from "./Components /info.jsx";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import InfoIcon from "./Components /img/info.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="body">
      <Provider store={store}>
        <Counter />
        <div className="App">
          <Button
            className="info-btn, info-btn"
            variant="primary"
            onClick={() => setModalShow(true)}>
            <img
              src={InfoIcon}
              alt="info"
              style={{ width: "3rem", height: "3rem" }}
            />
          </Button>
          <div className="body-container">
            <Info show={modalShow} onHide={() => setModalShow(false)} />
            <h1>TO-DO APP</h1>
            <ToDoList />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;

import { useState } from "react";

function ToDo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {}
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDo;

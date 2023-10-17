import React, { useState } from "react";
import "./AddToList.css";

function AddToList({ arr, setArr }) {
  const [text, setText] = useState("");
  function add() {
    if (text !== "")
      setArr([...arr, { text: text, comp: false, time: new Date() }]);

    setText("");
  }
  const handle = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="create">
      <input
        id="message"
        name="message"
        type="text"
        placeholder="Note"
        onChange={handle}
        value={text}
      />
      <button id="plus" onClick={() => add()}>
        +
      </button>
    </div>
  );
}

export default AddToList;

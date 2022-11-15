import React, { useState } from 'react';

export function ComposeForm(props) {

  const [typedInput, setTypedInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value; //what user typed in
    // console.log(value);
    setTypedInput(value);
  }

  const handleSubmit = (event) => {
    console.log("submitting", typedInput);
    props.addMessageCallback(typedInput);
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message"
        value={typedInput}
        onChange={handleChange}
        ></textarea>
        <button className="btn btn-secondary" type="button"
          onClick={handleSubmit}
          >
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}
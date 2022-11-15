import React, {useState} from 'react';

export function ComposeForm(props) {
  const [typedValue, setTypedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setTypedValue(value); //update state and re-render!
  }

  const handleSubmit = (event) => {
    console.log("post", typedValue);
    props.addMessageCallback(typedValue);
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={typedValue}
          
        ></textarea>
        <button 
          className="btn btn-secondary" type="button"
          onClick={handleSubmit}
          >
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}
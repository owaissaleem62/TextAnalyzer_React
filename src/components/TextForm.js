import React, {useState} from "react";

export default function TextForm(props) {

  const handleUpClick =() =>{
    // console.log('Uppercase clicked');
    let newText = text.toUpperCase();
    setText(newText)
   
  }
  const handleLoClick =() =>{
    // console.log('Uppercase clicked');
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnchange =(event) =>{
    // console.log('onchange occured');
    setText(event.target.value)

  }
  const handleClearText =() =>{
    // console.log('Uppercase clicked');
    setText(" ")
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const [text, setText] = useState("")
  return (
<>
    <div className="mt-5 container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-2 mt-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 mt-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 mt-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2 mt-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 mt-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




    </div>
    <div className="container mt-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}


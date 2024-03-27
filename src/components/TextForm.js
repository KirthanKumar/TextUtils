import React, { useState } from "react"; // rfc

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    // settext("You have clicked on handleUpClick");
    settext(newText);
    props.showalert("Converted to upper case!", "success");
  };

  const handleLowClick = () => {
    settext(text.toLowerCase());
    props.showalert("Converted to lower case!", "success");
  };

  const handleClearClick = () => {
    settext("");
    props.showalert("The text was cleared!", "success");
  };

  // const handleCopy = () => {
  //   var text = document.getElementById("myTextArea");
  //   text.select();
  //   navigator.clipboard.writeText(text.value); 
  //   document.getSelection().removeAllRanges(); // this deselects the selection of text which was happening after we copy text
  //   props.showalert("The text was copied to clipboard!", "success");
  // };
  
  // below handleCopy function is enough
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("The text was copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showalert("Extra spaces were removed!", "success");
  };

  const handleReverse = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newStr = strArr.join("");
    settext(newStr);
    props.showalert("The text was reversed!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    settext(event.target.value); // this sets the text value to the value that is fed by user into the textarea. That means
    // as the state of the textarea is being changed as user is typing somethinf in the textarea, the state variable text is
    // also changed.
    // settext("you type anything in this textarea you see only this");
  };

  // const [text,setText] = useState("Enter text here");
  const [text, settext] = useState("");

  let stylemi = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "gray" : "white",
  };

  return (
    <>
      <div className="container" id="textFormBox1" style={stylemi}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myTextArea"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={stylemi}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3 my-3"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3 my-3"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-success mx-3 my-3"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3 my-3"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-warning mx-3 my-3"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-info mx-3 my-3"
          onClick={handleReverse}
          disabled={text.length === 0}
        >
          Reverse
        </button>
        {/* <button type="button" className="btn btn-light mx-3 my-2">
          Light
        </button>
        <button type="button" className="btn btn-dark mx-3 my-2">
          Dark
        </button> */}
      </div>
      <div
        className="container my-3"
        id="textFormBox2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "gray" : "white",
        }}
      >
        <h1>Your text summery:</h1>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters */}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
      </div>
    </>
  );
}

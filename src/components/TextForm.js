import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  let timestamps = [];

  useEffect(() => {
    const typingArea = document.getElementById("myTextArea");
    if (typingArea) {
      typingArea.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (typingArea) {
        typingArea.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const handleKeyDown = (event) => {
    timestamps.push(Date.now());

    if (timestamps.length >= 20) {
      analyzeTiming();
    }
  };

  const analyzeTiming = () => {
    let intervals = timestamps
      .slice(1)
      .map((time, index) => time - timestamps[index]);
    let meanInterval =
      intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
    let stddevInterval = Math.sqrt(
      intervals.reduce(
        (sum, interval) => sum + Math.pow(interval - meanInterval, 2),
        0
      ) / intervals.length
    );

    console.log(`Mean interval: ${meanInterval.toFixed(4)} ms`);
    console.log(`Standard deviation: ${stddevInterval.toFixed(4)} ms`);

    if (meanInterval < 100 && stddevInterval < 50) {
      console.log("Keystrokes appear to be automated.");
      showAlertAndCloseTab();
    } else {
      console.log("Keystrokes appear to be manually entered.");
    }

    // Clear timestamps after analysis
    timestamps = [];
  };

  const showAlertAndCloseTab = () => {
    alert("Keystrokes appear to be automated. This tab will be closed.");
    window.close();
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
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

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("The text was copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    settext(newText);
    props.showalert("Extra spaces were removed!", "success");
  };

  const handleReverse = (event) => {
    let newText = text.split("").reverse().join("");
    settext(newText);
    props.showalert("The text was reversed!", "success");
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  let stylemi = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "gray" : "white",
  };

  return (
    <>
      <div className="container" id="textFormBox1" style={stylemi}>
        <h1>{props.heading}</h1>
        <div className="mx-3 my-3">
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
      </div>
      <div
        className="container my-3"
        id="textFormBox2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "gray" : "white",
        }}
      >
        <h1>Your text summary:</h1>
        <p>
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

import React, { useState } from "react"; // rfc

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  let myStyle2 = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(90 74 104)" : "white",
  };

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        // border: "2px solid black",
      });
      setBtnText("Enable Dark Mode");
    } else if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <div
        className="container"
        // style={myStyle}
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "gray" : "white",
        }}
      >
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                // style={myStyle}
                style={myStyle2}
              >
                <strong>Indroduction</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                // style={myStyle}
                style={myStyle2}
              >
                <strong>TextUtils is game-changer for anyone.</strong> Text
                utility websites are a game-changer for anyone who regularly
                works with text. Imagine needing to clean up a lengthy document
                but not having access to dedicated editing software. Text
                utility websites come to the rescue, offering a suite of tools
                accessible directly from your web browser. These online
                resources cater to a wide range of users, from students
                polishing essays and writers tracking word counts to programmers
                formatting code. <code>.accordion-body</code>, though the
                transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                // style={myStyle}
                style={myStyle2}
              >
                <strong>Functionality</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                // style={myStyle}
                style={myStyle2}
              >
                <strong>Functionalities offered by textUtils.</strong> The
                functionalities offered by text utilities are as diverse as
                their user base. Common features include case manipulation
                (switching between upper and lower case), character and word
                counting (essential for adhering to specific length
                requirements), duplicate removal (to eliminate accidental
                repetitions), and basic text cleaning (which can get rid of
                unwanted characters or formatting). For the more data-driven
                individuals, some utilities delve into advanced text analysis,
                revealing insights like the most frequently used words or
                providing estimates on reading time. This can be incredibly
                helpful for writers tailoring their content for specific
                audiences or educators gauging the difficulty level of assigned
                readings. <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                // style={myStyle}
                style={myStyle2}
              >
                <strong>Conclusion</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                // style={myStyle}
                style={myStyle2}
              >
                <strong>Its all yours.</strong> So, the next time you find
                yourself wrestling with a block of text and lacking the
                appropriate software, don't despair! Text utility websites offer
                a convenient and effective solution. With their user-friendly
                interfaces and comprehensive range of features, they empower you
                to take control of your text and transform it into a polished
                and well-structured masterpiece. <code>.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button type="button" className="btn" onClick={toggleStyle}>
          {btntext}
        </button>
        {/* to make this button show changes, uncomment myStyle and comment myStyle2*/}
      </div>
    </>
  );
}

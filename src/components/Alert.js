import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // initially is pros.alert is null so nothing will return as it is and operator. If it is not null then first it is true and then the necond main content which contains alert is run.
    // This happens because all the JSX will be converted to javascript calls.

    // we set height for this div container containing alert component because to avoid layout shifting
    <div style={{ height: "60px" }}> 
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          {/* <button
            type="button"
            className="btn-close "
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button> */}
        </div>
      )}
    </div>
  );
}



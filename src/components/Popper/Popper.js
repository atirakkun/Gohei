import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";

function Popper(props) {
  const [showPopper, setShowPopper] = useState(false);
  const objRef = useRef(null);
  const objPopRef = useRef(null);
  const [arrow, setArrow] = useState(null);

  let { styles, attributes } = usePopper(objRef.current, objPopRef.current, {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrow,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
    ],
  });
  return (
    <div
      ref={objRef}
      className={props.className}
      onMouseEnter={() => setShowPopper(!showPopper)}
      onMouseLeave={() => setShowPopper(!showPopper)}
    >
      {props.children}
      {showPopper ? (
        <div
          className="popperName"
          ref={objPopRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={setArrow} style={styles.arrow} className="popperArrow" />
          {props.name}
        </div>
      ) : null}
    </div>
  );
}

export default Popper;

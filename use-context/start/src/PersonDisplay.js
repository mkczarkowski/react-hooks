import React, { useContext } from "react";
import { PersonContext } from "./context/PersonContext";

const PersonDisplay = ({ inputProps, status }) => (
  <div>
    <h2>
      Say hello the classy way, <br /> my dear{" "}
      <span className='person'>
        {inputProps.name.value} {inputProps.surname.value}
      </span>!
    </h2>
    <h2>
      <span className='person'>
        {inputProps.name.value} {inputProps.surname.value}
      </span>: Hello, I'm {status}!
    </h2>
  </div>
);

export default PersonDisplay;

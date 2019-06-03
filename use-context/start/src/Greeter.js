import React, { useState } from "react";
import usePerson from "./hooks/usePerson";
import ThemeSwitch from "./ThemeSwitch";
import "./Greeter.css";
import PersonDisplay from "./PersonDisplay";
import PersonForm from "./PersonForm";

const Greeter = () => {
  const [hasDarkMode, setDarkMode] = useState(true);
  const { inputProps, status, resetPerson } = usePerson();

  return (
    <div className='App'>
      <header
        className={`App-header App-header--${hasDarkMode ? "dark" : "light"}`}
      >
        <ThemeSwitch hasDarkMode={hasDarkMode} setDarkMode={setDarkMode} />
        <PersonDisplay inputProps={inputProps} status={status} />
        <PersonForm inputProps={inputProps} resetPerson={resetPerson} />
      </header>
    </div>
  );
};

export default Greeter;

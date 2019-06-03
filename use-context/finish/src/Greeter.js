import React, { useState } from "react";
import usePerson from "./hooks/usePerson";
import ThemeSwitch from "./ThemeSwitch";
import "./Greeter.css";
import PersonDisplay from "./PersonDisplay";
import PersonForm from "./PersonForm";
import PersonProvider from "./context/PersonContext";

const Greeter = () => {
  const [hasDarkMode, setDarkMode] = useState(true);

  return (
    <div className='App'>
      <header
        className={`App-header App-header--${hasDarkMode ? "dark" : "light"}`}
      >
        <ThemeSwitch hasDarkMode={hasDarkMode} setDarkMode={setDarkMode} />
        <PersonProvider>
          <PersonDisplay />
          <PersonForm />
        </PersonProvider>
      </header>
    </div>
  );
};

export default Greeter;

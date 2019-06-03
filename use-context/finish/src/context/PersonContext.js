import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const PersonContext = React.createContext();

const PersonProvider = ({ children }) => {
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [status, setStatus] = useState("unknown");

  useEffect(
    () => {
      axios
        .get("https://rickandmortyapi.com/api/character/", {
          params: {
            name: `${name} ${surname}`,
          },
        })
        .then(({ data }) => setStatus(data.results[0].status));
    },
    [name, surname]
  );

  const value = {
    inputProps: {
      name: {
        value: name,
        onChange: (e) => setName(e.target.value),
      },
      surname: {
        value: surname,
        onChange: (e) => setSurname(e.target.value),
      },
    },
    status,
    resetPerson: (event) => {
      event.preventDefault();

      setName("John");
      setSurname("Doe");
    },
  };

  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};

export const usePerson = () => {
  const context = useContext(PersonContext);

  if (context === undefined) {
    throw new Error("usePerson must be nested in PersonProvider");
  }

  return context;
};

export default PersonProvider;

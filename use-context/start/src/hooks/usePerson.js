import { useState, useEffect } from "react";
import axios from "axios";

const usePerson = (
  defaultValues = { name: "John", surname: "Doe", status: "unknown" }
) => {
  const [name, setName] = useState(defaultValues.name);
  const [surname, setSurname] = useState(defaultValues.surname);
  const [status, setStatus] = useState(defaultValues.status);

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

  return {
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
};

export default usePerson;

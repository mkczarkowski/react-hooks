import React, { useContext } from "react";
import { usePerson } from "./context/PersonContext";

const PersonForm = () => {
  const { inputProps, resetPerson } = usePerson();

  return (
    <div className='form-style-6'>
      <form onSubmit={resetPerson}>
        <label htmlFor='name'>Name</label>
        <input
          {...inputProps.name}
          type='text'
          name='name'
          id='name'
          placeholder='Name...'
        />
        <label htmlFor='surname'>Surname</label>
        <input
          {...inputProps.surname}
          type='text'
          name='surname'
          id='surname'
          placeholder='Surname...'
        />
        <input type='submit' value='Reset' />
      </form>
    </div>
  );
};

export default PersonForm;

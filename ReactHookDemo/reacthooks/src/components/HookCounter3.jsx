import React, { useState } from "react";

function HookCounter3() {
  const initialvalues = {
    firstname: "",
    lastname: "",
  };

  const [person, setPerson] = useState(initialvalues);
  return (
    <div>
      {/* {person} */}
      FirstName:
      <input
        type="text"
        value={person.firstname}
        onChange={(ev) => setPerson({ ...person, firstname: ev.target.value })}
      ></input>
      LastName:
      <input
        type="text"
        value={person.lastname}
        onChange={(ev) => setPerson({ ...person, lastname: ev.target.value })}
      ></input>
      <h2>your first name is: {person.firstname}</h2>
      <h2>your last name is: {person.lastname}</h2>
    </div>
  );
}

export default HookCounter3;

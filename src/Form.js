//need inputs for Email, Country, Zip Code, Password (input type, labelName)
import { useState } from "react";

function InputField({ inputType, labelName, inputId }) {
  return (
    <div>
      <label htmlFor={inputId}>{labelName} : </label>
      <input type={inputType} id={inputId} />
    </div>
  );
}
function Form({ children }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submited");
      }}
    >
      {children}
      <button>Submit</button>
    </form>
  );
}

export function DisplayFormInput() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastName}
        />
      </div>
      <p>{`Hello, ${firstName} ${lastName}`}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export function MessageForm() {
  return (
    <Form>
      <InputField
        inputType={"text"}
        labelName={"Message"}
        inputId={"Message"}
      ></InputField>
    </Form>
  );
}

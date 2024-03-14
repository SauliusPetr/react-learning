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

export function UpdateObjInForm() {
  const [car, setCar] = useState({
    color: "Light Green",
    mark: "Volvo",
    model: "P18000",
  });

  function handleColorChange(e) {
    setCar({ ...car, color: e.target.value });
  }

  function handleMarkChange(e) {
    setCar({ ...car, mark: e.target.value });
  }

  function handleModelChange(e) {
    setCar({ ...car, model: e.target.value });
  }
  return (
    <>
      <form>
        <label>
          Color:
          <input type="text" value={car.color} onChange={handleColorChange} />
        </label>
        <label>
          Mark:
          <input type="text" value={car.mark} onChange={handleMarkChange} />
        </label>
        <label>
          Model:
          <input type="text" value={car.model} onChange={handleModelChange} />
        </label>
      </form>
      <p>
        {car.color} {car.mark} {car.model}
      </p>
    </>
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

let animal = [
  { id: 0, name: "tiger", seen: false },
  { id: 1, name: "cat", seen: false },
];
export function FormWithValidation() {
  const [myList, setMyList] = useState(animal);
  const [yourList, setYourList] = useState(animal);

  function handleMyList(itemId, isChecked) {
    setMyList(
      myList.map((item) => {
        if (item.id === itemId) {
          return { ...item, seen: isChecked };
        } else {
          return item;
        }
      })
    );
  }

  function handleYourList(itemId, isChecked) {
    setYourList(
      yourList.map((item) => {
        if (item.id === itemId) {
          return { ...item, seen: isChecked };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h3>My animal list:</h3>
      <ItemList listToView={myList} actionOnToggle={handleMyList} />

      <h3>Your animal list:</h3>
      <ItemList listToView={yourList} actionOnToggle={handleYourList} />
    </>
  );
}

function ItemList({ listToView, actionOnToggle }) {
  return (
    <ul>
      {listToView.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.seen}
              onChange={(event) => {
                actionOnToggle(item.id, event.target.checked);
              }}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
}

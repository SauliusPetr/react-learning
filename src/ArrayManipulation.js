import { useState } from "react";
import { people } from "./data";
//manipulate array by adding events
export function AddArrayItems() {
  const [nameArray, setArray] = useState([]);
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }
  function handleAddItem() {
    setArray([...nameArray, { name: name }]);
  }

  return (
    <>
      <h3>Name List</h3>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {nameArray.map((e) => (
          <li key={e.name}>{e.name}</li>
        ))}
      </ul>
    </>
  );
}

let wantedPeople = [
  { id: 0, name: "Freddy" },
  { id: 1, name: "Bill" },
  { id: 2, name: "Gru" },
];
export function DeleteArrayItems() {
  const [wantedArray, setWanted] = useState(wantedPeople);

  function handleDelete(criminal) {
    setWanted(wantedArray.filter((person) => criminal.id != person.id));
  }
  function refreshList() {
    setWanted(wantedPeople);
  }

  return (
    <>
      <hr />
      <h3>
        Delete From List<button onClick={refreshList}>Refresh</button>
      </h3>

      <ul>
        {wantedArray.map((criminal) => (
          <li key={criminal.id}>
            {criminal.name}
            <button onClick={() => handleDelete(criminal)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

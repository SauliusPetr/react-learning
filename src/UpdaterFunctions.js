import { useState } from "react";

export function UpdaterFunctionEx() {
  const [number, setNumber] = useState(0);

  function handleNumber() {
    //updater function
    //it adds its result to the queue
    //and also takes values from the queue

    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
  }

  return (
    <>
      {number}
      <button onClick={handleNumber}>+3</button>
    </>
  );
}
export function NormalThenUpdater() {
  const [number, setNumber] = useState(0);
  function handleNumber() {
    //normal function
    //it ingores whats already in queue
    //and ads number + addValue to the queue
    setNumber(number + 2);

    //updater function takes whats in queue
    //and adds new result to que
    setNumber((n) => n + 1);
  }

  return (
    <>
      {number}
      <button onClick={handleNumber}>+3</button>
    </>
  );
}
export function UpdaterThenNormal() {
  const [number, setNumber] = useState(0);
  function handleNumber() {
    //updater function takes whats in queue
    //and adds new result to que
    setNumber((n) => n + 1);

    //normal function
    //it ingores whats already in queue
    //and ads number + addValue to the queue
    setNumber(number + 2);
  }

  return (
    <>
      {number}
      <button onClick={handleNumber}>+3</button>
    </>
  );
}

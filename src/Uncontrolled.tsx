import React, { useRef, useState } from "react";
const Uncontrolled = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(luckyName.current.value);
    const username = luckyName.current.value;
    setShow(username);
  };
  return (
    <>
      <h1>Uncontrol</h1>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="luckyName">Enter your LuckyName </label>
        <input type="text" id="luckyName" ref={luckyName} />
        <br></br>
        <button>Submit</button>
      </form>
      <p>{show}</p>
    </>
  );
};
export default Uncontrolled;

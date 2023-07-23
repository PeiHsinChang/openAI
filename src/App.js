import dotenv from "dotenv";
import React from "react";
import { useState } from "react";

dotenv.config();

export function App() {
  console.log(process.env.OPENAI_API_KEY);
  const [inputValue, setInputValue] = useState("");
  //   const []
  const submitText = () => {
    console.log("submitText");
  };

  return (
    <>
      <h1>Hello world!!!!</h1>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          //   console.log(e.target.value);
        }}
      />
      <button type="button" onClick={submitText}>
        確認
      </button>
    </>
  );
}

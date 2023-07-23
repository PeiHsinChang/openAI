import dotenv from "dotenv";
import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

export function App() {
  console.log(process.env.OPENAI_API_KEY);
  const [inputValue, setInputValue] = useState("");
  //   const []
  const submitText = async () => {
    console.log("submitText");
    // const configuration = new Configuration({
    //   organization: "org-haoyZsSbhi7ckZe0uoCcv9ad",
    //   apiKey: process.env.OPENAI_API_KEY,
    // });
    // const openai = new OpenAIApi(configuration);
    // const response = await openai.listEngines();
    // console.log({ response });
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

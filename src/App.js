import { useState } from "react";
import dotenv from "dotenv";
import { openai } from "../openAi";

dotenv.config();

export function App() {
  const [inputValue, setInputValue] = useState("");
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("apiResponse", apiResponse);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
        // prompt: inputValue,
        // temperature: 0.5,
        // max_tokens: 4000,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
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
      <button type="button" onClick={handleSubmit}>
        確認
      </button>
    </>
  );
}

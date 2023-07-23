import dotenv from "dotenv";

dotenv.config();

export function App() {
    console.log(process.env)
    return <h1>Hello world!!!!</h1>;
  }



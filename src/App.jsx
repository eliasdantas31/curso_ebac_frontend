import { useState } from "react";
import Form from "./components/form";
import Result from "./components/result";

export default function App() {
  const [imc, setImc] = useState(null);

  return (
    <div>
      <Form setImc={setImc} />
      <Result imc={imc} />
    </div>
  );
}
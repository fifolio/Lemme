import { useEffect } from "react";
import { Todo } from "./Todo";

export default function App() {
  useEffect(() => {
    document.title = "Lemme App";
  }, []);


  return (
    <div className="App">
      <Todo />
    </div>
  )
}

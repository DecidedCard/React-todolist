import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let checkContents = [];

  const startContents = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const checkKey = localStorage.key(i);
      const check = JSON.parse(localStorage.getItem(checkKey));
      checkContents.push(check);
    }
  };
  startContents();
  const [contents, setContents] = useState([...checkContents]);

  return (
    <div className="main">
      <Header contents={contents} setContents={setContents} />
      <Main contents={contents} setContents={setContents} />
    </div>
  );
}

export default App;

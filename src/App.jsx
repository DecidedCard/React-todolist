import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기술을 공부합시다.",
      isDone: false,
    },
  ]);

  return (
    <div>
      <Header contents={contents} setContents={setContents} />
      <Main contents={contents} setContents={setContents} />
      <div></div>
    </div>
  );
}

export default App;

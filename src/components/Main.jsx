import React from "react";
import TodoCard from "./TodoCard";

function Main({ contents, setContents }) {
  return (
    <main>
      <TodoCard contents={contents} setContents={setContents} isActive={true} />
      <TodoCard
        contents={contents}
        setContents={setContents}
        isActive={false}
      />
    </main>
  );
}

export default Main;

import React from "react";
import TodoCard from "./TodoCard";

function Main({ contents, setContents }) {
  return (
    <main>
      <section className="todolist">
        <TodoCard
          contents={contents}
          setContents={setContents}
          isActive={true}
        />
        <TodoCard
          contents={contents}
          setContents={setContents}
          isActive={false}
        />
      </section>
    </main>
  );
}

export default Main;

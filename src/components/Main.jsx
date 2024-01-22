import React from "react";
import TodoCard from "./TodoCard";

function Main({ contents, setContents }) {
  return (
    <main>
      <section className="todolist">
        <h2>Working...🔥🔥</h2>
        <ul className="card-list">
          {contents.map((i) => {
            if (i.isDone === true) {
              return false;
            }
            return (
              <TodoCard contents={contents} setContents={setContents} i={i} />
            );
          })}
        </ul>
        <h2>Done..!🎆</h2>
        <ul className="card-list">
          {contents.map((i) => {
            if (i.isDone === false) {
              return false;
            }
            return (
              <TodoCard contents={contents} setContents={setContents} i={i} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

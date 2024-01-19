import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기술을 공부합시다.",
      isDone: false,
    },
  ]);

  const deleteTodo = (id) => {
    const newContents = contents.filter((todo) => {
      return todo.id !== id;
    });
    setContents(newContents);
  };

  const doneBtn = (id) => {
    const doneTodo = contents.filter((todo) => {
      return todo.id === id;
    });
    const filterContents = contents.filter((item) => {
      return item === doneTodo;
    });
    console.log(filterContents);
    const check = { ...doneTodo, isDone: true };
    // setContents([...contents, check]);
    // console.log(contents);
  };
  return (
    <div>
      <Header contents={contents} setContents={setContents} />
      <main>
        <section>
          <h2>Working...🔥🔥</h2>
          <ul className="card-list">
            {contents.map((i) => {
              if (i.isDone === false) {
                return (
                  <li key={i.id} className="todo-card">
                    <h3>{i.title}</h3>
                    <p>{i.content}</p>
                    <p className="todo-btn">
                      <button onClick={() => deleteTodo(i.id)}>삭제하기</button>
                      <button onClick={() => doneBtn(i.id)}>완료</button>
                      <p>{i.isDone}</p>
                    </p>
                  </li>
                );
              }
            })}
          </ul>
          <h2>Done..!🎆</h2>
          <ul className="card-list">
            {contents.map((i) => {
              if (i.isDone === true) {
                return (
                  <li key={i.id} className="todo-card">
                    <h3>{i.title}</h3>
                    <p>{i.content}</p>
                    <p className="todo-btn">
                      <button onClick={() => deleteTodo(i.id)}>삭제하기</button>
                      <button onClick={() => doneBtn(i.id)}>완료</button>
                      <p>{i.isDone}</p>
                    </p>
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </main>
      <div></div>
    </div>
  );
}

export default App;

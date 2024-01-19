import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기술을 공부합시다.",
    },
  ]);

  const titleChangeEvent = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeEvent = (event) => {
    setContent(event.target.value);
  };

  const addBtnEvent = () => {
    const newTodo = {
      id: contents.length + 1,
      title,
      content,
    };

    setContents([...contents, newTodo]);
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <header>
        <section className="title">
          <p>My Todo List</p>
          <p>React</p>
        </section>
        <section className="add-todo">
          <p>
            제목
            <input value={title} onChange={titleChangeEvent} />
            내용
            <input value={content} onChange={contentChangeEvent} />
          </p>
          <button onClick={addBtnEvent}>추가하기</button>
        </section>
      </header>
      <main>
        <section>
          <h2>Working...🔥🔥</h2>
          <ul>
            {contents.map((i) => {
              return (
                <li key={i.id} className="todo-card">
                  <h3>{i.title}</h3>
                  <p>{i.content}</p>
                  <p className="todo-btn">
                    <button>삭제하기</button>
                    <button>완료</button>
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <div></div>
    </div>
  );
}

export default App;

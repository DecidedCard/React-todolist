import { useState } from "react";
import React from "react";

function Header({ contents, setContents }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeEvent = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeEvent = (event) => {
    setContent(event.target.value);
  };

  const addBtnEvent = () => {
    if (title === "" && content === "") {
      document.querySelector(".check-content").style.display = "block";
    } else {
      document.querySelector(".check-content").style.display = "none";
      const newTodo = {
        id: contents.length + 1,
        title,
        content,
        isDone: false,
      };
      console.log(newTodo);

      localStorage.setItem(`${newTodo.id}`, JSON.stringify(newTodo));

      const localStorageItem = JSON.parse(localStorage.getItem(newTodo.id));
      console.log(localStorageItem);

      setContents([...contents, localStorageItem]);
      setTitle("");
      setContent("");
    }
  };
  return (
    <header>
      <section className="title">
        <p>My Todo List</p>
        <p>정해준</p>
      </section>
      <section className="add-todo">
        <p className="content-add">
          <p>
            제목:&nbsp;
            <input
              className="title-input"
              value={title}
              onChange={titleChangeEvent}
            />
            &nbsp; 내용:&nbsp;
            <input
              className="content-input"
              value={content}
              onChange={contentChangeEvent}
            />
          </p>
          <button className="add-btn" onClick={addBtnEvent}>
            추가하기
          </button>
        </p>
        <p className="check-content">내용을 입력해주시기 바랍니다.</p>
      </section>
    </header>
  );
}

export default Header;

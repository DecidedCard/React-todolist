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

  const addSubmitEvent = (event) => {
    event.preventDefault();
    if (title === "" && content === "") {
      document.querySelector(".check-content").style.display = "block";
    } else {
      document.querySelector(".check-content").style.display = "none";
      const newTodo = {
        id: Date.now(),
        title,
        content,
        isDone: false,
      };

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
        <p>React</p>
      </section>
      <section className="add-todo">
        <form className="content-add" onSubmit={addSubmitEvent}>
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
          <button type="submit" className="add-btn">
            추가하기
          </button>
        </form>
        <p className="check-content">내용을 입력해주시기 바랍니다.</p>
      </section>
    </header>
  );
}

export default Header;

import React from "react";

function TodoCard({ contents, setContents, i }) {
  const deleteTodo = (id) => {
    const newContents = contents.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.removeItem(id);
    console.log(id);
    setContents(newContents);
  };

  const toggleBtn = (id) => {
    const check = contents.map((obj) => {
      if (id === obj.id) {
        const changeContent = { ...obj, isDone: !obj.isDone };
        localStorage.setItem(id, JSON.stringify(changeContent));
        return changeContent;
      } else {
        return { ...obj };
      }
    });
    setContents(check);
  };

  if (i.isDone === false) {
    return (
      <li key={i.id} className="todo-card">
        <h3>{i.title}</h3>
        <p>{i.content}</p>
        <p className="todo-btn">
          <button className="del-btn" onClick={() => deleteTodo(i.id)}>
            삭제하기
          </button>
          <button className="done-btn" onClick={() => toggleBtn(i.id)}>
            완료
          </button>
        </p>
      </li>
    );
  } else {
    return (
      <li key={i.id} className="todo-card">
        <h3>{i.title}</h3>
        <p>{i.content}</p>
        <p className="todo-btn">
          <button className="del-btn" onClick={() => deleteTodo(i.id)}>
            삭제하기
          </button>
          <button className="cancle-btn" onClick={() => toggleBtn(i.id)}>
            취소
          </button>
        </p>
      </li>
    );
  }
}

export default TodoCard;

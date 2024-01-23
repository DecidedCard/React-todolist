import React from "react";

function TodoCard({ contents, setContents, i, isActive }) {
  const deletebtn = (id) => {
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

  return (
    <>
      <h2>{isActive ? "Working...🔥🔥" : "Done..!🎆"}</h2>
      <ul className="card-list">
        {contents.map((i) => {
          if (isActive === i.isDone) {
            return false;
          }
          return (
            <li key={i.id} className="todo-card">
              <h3>{i.title}</h3>
              <p>{i.content}</p>
              <p className="todo-btn">
                <button className="del-btn" onClick={() => deletebtn(i.id)}>
                  삭제하기
                </button>
                <button className="done-btn" onClick={() => toggleBtn(i.id)}>
                  {isActive ? "완료" : "취소"}
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoCard;

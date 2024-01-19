import React from "react";

function Main({ contents, setContents }) {
  const deleteTodo = (id) => {
    const newContents = contents.filter((todo) => {
      return todo.id !== id;
    });
    setContents(newContents);
  };

  const doneBtn = (id) => {
    const check = contents.map((obj) => {
      if (id === obj.id) {
        return { ...obj, isDone: true };
      } else {
        return { ...obj };
      }
    });
    setContents(check);
  };

  const cancleBtn = (id) => {
    const check = contents.map((obj) => {
      if (id === obj.id) {
        return { ...obj, isDone: false };
      } else {
        return { ...obj };
      }
    });
    setContents(check);
  };

  return (
    <main>
      <section>
        <h2>Working...🔥🔥</h2>
        <ul className="card-list">
          {contents.map((i) => {
            if (i.isDone === true) {
              return false;
            }
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
          })}
        </ul>
        <h2>Done..!🎆</h2>
        <ul className="card-list">
          {contents.map((i) => {
            if (i.isDone === false) {
              return false;
            }
            return (
              <li key={i.id} className="todo-card">
                <h3>{i.title}</h3>
                <p>{i.content}</p>
                <p className="todo-btn">
                  <button onClick={() => deleteTodo(i.id)}>삭제하기</button>
                  <button onClick={() => cancleBtn(i.id)}>취소</button>
                  <p>{i.isDone}</p>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

import React from "react";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function Layout() {
  let checkContents = [];

  const startContents = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const checkKey = localStorage.key(i);
      const check = JSON.parse(localStorage.getItem(checkKey));
      checkContents.push(check);
    }
  };
  startContents();
  const [contents, setContents] = useState([...checkContents]);

  return (
    <div className="main">
      <Header contents={contents} setContents={setContents} />
      <Main contents={contents} setContents={setContents} />
    </div>
  );
}

export default Layout;

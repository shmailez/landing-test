// import { NavLink, Router } from "react-router-dom";

import { useState } from "react";

type FormProps = {
  props: React.RefObject<HTMLElement>;
};

const Navigate: React.FC<FormProps> = ({ props }) => {
  const [toggle, setToggle] = useState(false);
  console.log("ref", props);
  return (
    <>
      <nav className="navigate">
        <button
          className="nav-toggle"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {toggle ? "X" : "="}
        </button>
        {toggle && (
          <ul>
            {/* <li>
            <Router>
              <NavLink to="/">click</NavLink>
            </Router>
          </li> */}
            <li onClick={() => setToggle((toggle) => !toggle)}>
              <a href="#hiw">Как это работает</a>
            </li>
            <li onClick={() => setToggle((toggle) => !toggle)}>
              <a href="#th">3-й блок</a>
            </li>
            <li onClick={() => setToggle((toggle) => !toggle)}>
              <a href="#answers">Вопросы и ответы</a>
            </li>
            <li onClick={() => setToggle((toggle) => !toggle)}>
              <a href="#form">Форма</a>
            </li>
          </ul>
        )}

        <ul className="nav-gorizontal">
          {/* <li>
            <Router>
              <NavLink to="/">click</NavLink>
            </Router>
          </li> */}
          <li>
            <a href="#hiw">Как это работает</a>
          </li>
          <li>
            <a href="#th">3-й блок</a>
          </li>
          <li>
            <a href="#answers">Вопросы и ответы</a>
          </li>
          <li>
            <a href="#form">Форма</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigate;

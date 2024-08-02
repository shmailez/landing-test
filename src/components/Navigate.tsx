// import { NavLink, Router } from "react-router-dom";

import { useState } from "react";
import logo from "../assets/logo.svg";
import logoblack from "../assets/logoBlack.svg";

type FormProps = {
  props: React.RefObject<HTMLElement>;
};

const Navigate: React.FC<FormProps> = ({ props }) => {
  const [toggle, setToggle] = useState(false);
  console.log("ref", props);
  return (
    <>
      <nav className="navigate">
        <img className="logo" src={logo} alt="logo" />
        <button
          className="nav-toggle"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          {toggle ? <span>X</span> : "="}
        </button>
        {toggle && (
          <ul>
            <li onClick={() => setToggle((toggle) => !toggle)}>
              <img className="logo logo-black" src={logoblack} alt="logo" />
            </li>
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

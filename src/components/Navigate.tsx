// import { NavLink, Router } from "react-router-dom";

type FormProps = {
  props: React.RefObject<HTMLElement>;
};

const Navigate: React.FC<FormProps> = ({ props }) => {
  console.log("ref", props);
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* <Router>
              <NavLink to="/">click</NavLink>
            </Router> */}
          </li>
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

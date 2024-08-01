import { useState } from "react";

interface AnswerItem {
  id: number;
  title: string;
  content: string;
}

interface AccordeonProps {
  props: AnswerItem;
}

const Accordeon: React.FC<AccordeonProps> = ({ props }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="accordeon-item">
        <div>
          <h3 key={props.id}>{props.title}</h3>
          <button onClick={() => setToggle((toggle) => !toggle)}>
            {toggle ? "-" : "+"}
          </button>
        </div>
        {toggle ? <p>{props.content}</p> : null}
      </div>
    </>
  );
};

export default Accordeon;

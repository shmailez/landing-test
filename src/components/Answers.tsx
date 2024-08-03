import Accordeon from "./AccordeonItems";
import { useAppSelector } from "../hooks/hooks";

interface AnswerItem {
  id: string;
  title: string;
  content: string;
}

const Answers: React.FC = () => {
  const answerList = useAppSelector<AnswerItem[]>(
    (state) => state.answeritems.answeritems
  );

  return (
    <>
      <div id="answers" className="answers">
        <h3>Вопросы и ответы</h3>

        {answerList.map((item) => (
          <Accordeon key={item.id} props={item} />
        ))}
      </div>
    </>
  );
};

export default Answers;

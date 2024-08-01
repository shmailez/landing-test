import { useEffect, useState } from "react";
import getAnswers from "../services/answerData";
import Accordeon from "./AccordeonItems";

interface AnswerItem {
  id: number;
  title: string;
  content: string;
}

const Answers: React.FC = () => {
  const [data, setData] = useState<AnswerItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getAnswers();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  return (
    <>
      <div id="answers" className="answers">
        <h3>Вопросы и ответы</h3>

        {data.map((item) => (
          <Accordeon key={item.id} props={item} />
        ))}
      </div>
    </>
  );
};

export default Answers;

import { useEffect, useState } from "react";
import getSurvey from "../services/surveyData";

interface SurveyItem {
  id: number;
  title: string;
  content: string;
}

const Survey = () => {
  const [data, setData] = useState<SurveyItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getSurvey();
      setData(fetchedData);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="survey-block">
        {data.map((item) => (
          <div key={item.id} className="survey-item">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Survey;

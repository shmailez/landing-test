import { useAppSelector } from "../hooks/hooks";

interface SurveyItem {
  id: string;
  title: string;
  content: string;
}

const Survey = () => {
  const surveyList = useAppSelector<SurveyItem[]>(
    (state) => state.surveyitems.surveyitems
  );

  return (
    <>
      <div className="wrapper">
        <div className="survey-block">
          {surveyList.map((item) => (
            <div key={item.id} className="survey-item">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Survey;

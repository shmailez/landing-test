import secure from "../assets/secure.svg";

const HowItsWork = () => {
  return (
    <>
      <div className="hi-work">
        <h2 id="hiw" className="title">
          Как это работает?
        </h2>
        <div className="hi-work_item">
          <img src={secure} alt="secure" />
          <h3>Прочитай задание внимательно</h3>
          <p>Думаю у тебя не займет это больше двух-трех минут</p>
        </div>
        <div className="hi-work_item">
          <img src={secure} alt="secure" />
          <h3>Прочитай задание внимательно</h3>
          <p>Думаю у тебя не займет это больше двух-трех минут</p>
        </div>
        <div className="hi-work_item">
          <img src={secure} alt="secure" />
          <h3>Прочитай задание внимательно</h3>
          <p>Думаю у тебя не займет это больше двух-трех минут</p>
        </div>
        <div className="hi-work_item">
          <img src={secure} alt="secure" />
          <h3>Прочитай задание внимательно</h3>
          <p>Думаю у тебя не займет это больше двух-трех минут</p>
        </div>
      </div>
    </>
  );
};

export default HowItsWork;

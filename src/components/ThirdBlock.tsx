import img from "../assets/2_1.svg";

const ThirdBlock = () => {
  return (
    <>
      <div id="th" className="tb">
        <div className="tb-text">
          <h3>Круто, ты дошел до третьего блока</h3>
          <p>
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <p>
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </p>
        </div>
        <div className="tb-img">
          <img src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default ThirdBlock;

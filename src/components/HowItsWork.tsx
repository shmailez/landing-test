import { useEffect, useState } from "react";
import getHiw from "../services/hiwData";

interface HiwItem {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
}

const HowItsWork = () => {
  const [data, setData] = useState<HiwItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getHiw();
      setData(fetchedData);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="hi-work">
        <h2 id="hiw" className="title">
          Как это работает?
        </h2>
        {data.map((item) => (
          <div key={item.id} className="hi-work_item">
            <img src={item.imgUrl} alt="secure" />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
        {/* <div className="hi-work_item">
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
        </div> */}
      </div>
    </>
  );
};

export default HowItsWork;

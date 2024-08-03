import { useAppSelector } from "../hooks/hooks";

interface HiwItem {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
}

const HowItsWork = () => {
  const hiwList = useAppSelector<HiwItem[]>((state) => state.hiwites.hiwitems);

  return (
    <>
      <div className="hi-work">
        <h2 id="hiw" className="title">
          Как это работает?
        </h2>
        {hiwList.map((item) => (
          <div key={item.id} className="hi-work_item">
            <img src={item.imgUrl} alt="secure" />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HowItsWork;

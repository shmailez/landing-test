import { useState } from "react";
import { addUser } from "../redux/userSlice";
import { useAppDispatch } from "../hooks/hooks";

type FormProps = {
  props: React.RefObject<HTMLElement | undefined>;
};

const Form: React.FC<FormProps> = ({ props }) => {
  console.log(props);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consent, setConsent] = useState(false);
  const dispatch = useAppDispatch();

  const consentClick = () => {
    setConsent((consent) => !consent);
  };

  const handleAction = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (name.trim().length) {
      dispatch(
        addUser({
          id: new Date().toISOString(),
          name: name,
          phoneNumber: phoneNumber,
          consent: consent,
        })
      );
      setName("");
      setPhoneNumber("");
    }
  };

  return (
    <>
      <h3 className="form-title" id="form">
        Отрправь форму
      </h3>
      <form className="form">
        <input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={phoneNumber}
          placeholder="Телефон"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <div>
          <input
            className="form-checkbox"
            type="checkbox"
            name="checkbox"
            checked={consent}
            onChange={() => consentClick()}
          />

          <label htmlFor="checkbox">Согласен, отказываюсь</label>
        </div>

        <input
          className="form-button"
          type="button"
          value="Отправить"
          onClick={handleAction}
        />
      </form>
    </>
  );
};

export default Form;

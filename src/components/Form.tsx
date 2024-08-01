import { useState } from "react";
import { addUser } from "../redux/userSlice";
import { useAppDispatch } from "../hooks/hooks";

type FormProps = {
  props: React.RefObject<HTMLElement | undefined>;
};

const Form: React.FC<FormProps> = ({ props }) => {
  console.log("ref", props);

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
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          type="checkbox"
          checked={consent}
          onChange={() => consentClick()}
        />

        <input type="button" value="add" onClick={handleAction} />
      </form>
    </>
  );
};

export default Form;

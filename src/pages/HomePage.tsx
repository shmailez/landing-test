import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Navigate from "../components/Navigate";
import Survey from "../components/Survey";
import HowItsWork from "../components/HowItsWork";
import ThirdBlock from "../components/ThirdBlock";
import Answers from "../components/Answers";
import { useAppDispatch } from "../hooks/hooks";
import { getHiwItems } from "../redux/hiwSlice";
import { getSurveyItems } from "../redux/surveySlice";
import { getAnswerItems } from "../redux/answerSlice";

const HomePage: React.FC = () => {
  const formRef = useRef<HTMLElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHiwItems());
    dispatch(getSurveyItems());
    dispatch(getAnswerItems());
  }, [dispatch]);

  console.log("ref", formRef);
  return (
    <>
      <Navigate props={formRef} />
      <Header />
      <HowItsWork />
      <ThirdBlock />
      <Answers />
      <Survey />
      <Form props={formRef} />
      <Footer />
    </>
  );
};

export default HomePage;

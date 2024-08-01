import React, { useRef } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Navigate from "../components/Navigate";
import Survey from "../components/Survey";
import HowItsWork from "../components/HowItsWork";
import ThirdBlock from "../components/ThirdBlock";
import Answers from "../components/Answers";

const HomePage: React.FC = () => {
  const formRef = useRef<HTMLElement>(null);

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

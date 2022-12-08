import React from "react";

const MainInfo = [
  { text: "This is my" },
  { text: "first react site" },
  { text: "using API" },
  { text: "thank you :)" },
];

const MainText = ({ text }) => {
  return <div>{text}</div>;
};
const MainCont = () => {
  return (
    <section className="cont__main">
      <div className="container">
        <div className="main__inner">
          {MainInfo.map((info) => (
            <MainText key={info.text} text={info.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCont;

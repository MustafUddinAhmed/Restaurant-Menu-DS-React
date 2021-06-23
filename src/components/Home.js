import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import { fetchDemo } from "./Data";

const RenderAccordion = (props) => {
  return (
    <Accordion
      title={props.object.name}
      content={
        props.object.childName &&
        props.object.childName.map((child) => (
          <RenderAccordion object={child} />
        ))
      }
    />
  );
};

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.npoint.io/93bed93a99df4c91044e");
    const data = await response.json();
    let body = data.body;
    console.log("Fetching all components");
    setData(fetchDemo(body));
  };

  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <RenderAccordion object={item} />
      ))}
      {/* {data.map((item) => console.log(item))} */}
    </div>
  );
};

export default Home;

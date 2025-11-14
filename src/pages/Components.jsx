import { useState } from "react";

import RadixCounter from "../components/RadixCounter";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperatures"; 

const Components = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      
      <RadixCounter />
      <Value name={"COUNTER"} value={counter} setValue={setCounter} />
      <Timer />
      <Adder />
      <Temperatures /> 
    </>
  );
};

export default Components;
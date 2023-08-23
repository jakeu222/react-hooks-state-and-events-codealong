import React from "react";
import { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)
  // basically a normally clsed circuit    false is the initial state
  function hanledClick() {
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "green" : "red"

  return (<button style={{ background: color }} onClick={hanledClick}>{isOn ? "ON" : "OFF"}</button>)
}

export default Toggle;

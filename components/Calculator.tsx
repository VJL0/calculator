"use client";
import React, { useState } from "react";

const calculatorButtons = [
  { value: "C", text: "C" },
  {
    value: "+/-",
    text: (
      <>
        <sup>+</sup>&#8260;<sub>&#8722;</sub>
      </>
    ),
  },
  { value: "%", text: "%" },
  { value: "/", text: "÷" },
  { value: "7", text: "7" },
  { value: "8", text: "8" },
  { value: "9", text: "9" },
  { value: "*", text: "×" },
  { value: "4", text: "4" },
  { value: "5", text: "5" },
  { value: "6", text: "6" },
  { value: "-", text: "−" },
  { value: "1", text: "1" },
  { value: "2", text: "2" },
  { value: "3", text: "3" },
  { value: "+", text: "+" },
  { value: "0", text: "0" },
  { value: ".", text: "." },
  { value: "=", text: "=" },
];

const Calculator = () => {
  const operatorValues = ["+", "-", "*", "/", "="];
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value: React.SetStateAction<string>) => {
    switch (value) {
      case "C":
        setDisplay("0");
        break;
      case "+/-":
        setDisplay(
          display.charAt(0) === "-" ? display.slice(1) : "-" + display
        );
        break;
      case "=":
        try {
          setDisplay(eval(display).toString());
        } catch (error) {
          setDisplay("Error");
        }
        break;
      default:
        if (display === "0" || display === "Error") {
          setDisplay(value);
        } else {
          setDisplay(display + value);
        }
        break;
    }
  };

  return (
    <div className="h-full bg-black rounded-[60px] flex items-end">
      <div className="max-w-[400px] max-h-[600px] m-10">
        <div className="h-20 text-white flex justify-end text-5xl pr-10">
          {display}
        </div>
        <div className="max-w-[400px] max-h-[600px] flex flex-wrap gap-5 select-none">
          {calculatorButtons.map((button, index) => (
            <button
              key={index}
              className={`size-20 rounded-full p-2 font-light text-3xl text-black bg-[#a5a5a5] 
              ${/\d/.test(button.value) || button.value === "." ? "!bg-[#333333] !text-white" : ""} 
              ${button.value === "0" ? "w-[180px]" : ""}
              ${operatorValues.includes(button.value) ? "!bg-[#ff9d0c] !text-white" : ""}`}
              onClick={() => handleButtonClick(button.value)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

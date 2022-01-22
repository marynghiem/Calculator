import React, { ReactElement, useEffect, useState } from "react";
import "../css/Calculator.css";

export const Calculator = (): ReactElement => {
  const someNumber: number = 1;
  let someString: string = 'hi';
  const [display, setDisplay] = useState<string>("");
  const [savedNumbers, setSavedNumbers] = useState([]);
  const [shouldClearDisplay, setShouldClearDisplay] = useState<boolean>(false);

  useEffect(() => {
    const operator = savedNumbers[savedNumbers.length - 1];
    if (savedNumbers.length > 2 && operator === '-'){
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue, "-"]);
      setDisplay(newValue);
      // Set a flag to clear the value when the next number is input
      setShouldClearDisplay(true);
    }
  }, [savedNumbers]);

  const insertOne = () => {
    setDisplay(display + "1")
  }
  const insertTwo = () => {
    // Check if the flag to clear the display is true, if so, clear the display first.
    const newDisplay = shouldClearDisplay ? "2" : display + "2";
    setDisplay(newDisplay);
    setShouldClearDisplay(false);
  }
  const insertThree = () => {
    setDisplay(display + "3")
  }
  const insertFour = () => {
    setDisplay(display + "4")
  }
  const insertFive = () => {
    setDisplay(display + "5")
  }
  const insertSix = () => {
    setDisplay(display + "6")
  }
  const insertSeven = () => {
    setDisplay(display + "7")
  }
  const insertEight = () => {
    setDisplay(display + "8")
  }
  const insertNine = () => {
    setDisplay(display + "9")
  }
  const insertZero = () => {
    setDisplay(display + "0")
  }
const clearDisplay = () => {
  setDisplay("");
  setSavedNumbers([]);
}

const insertAdd = () => {
  setSavedNumbers([...savedNumbers, parseFloat(display), "+"]);
  setDisplay("");
}

const insertSubtract = () => {
  // Second operator -> run compute (length of array === 4)
  setSavedNumbers([...savedNumbers, parseFloat(display), "-"]);
  setDisplay("");
}

//[1, "+", 3]
const computeTwoNumbers = () => {
  if (savedNumbers[1]=== "+"){
    return savedNumbers[0] + savedNumbers[2];
  }
  else if (savedNumbers[1] === "-"){
    return savedNumbers[0] - savedNumbers[2]; 
  }
  else if (savedNumbers[1] === "/"){
    return savedNumbers[0]/savedNumbers[2];
  }
  else if (savedNumbers[1] === "*"){
    return savedNumbers[0]*savedNumbers[2];
  }
}

console.log(savedNumbers);

  return (
    <div className="container">
      <div className="calculations">{display}</div>
        <div className="allClear numbersAndOperators brown" onClick={clearDisplay}>AC</div>
        <div className="positiveOrNegative numbersAndOperators brown">+/-</div>
        <div className="percent numbersAndOperators brown">%</div>
        <div className="division numbersAndOperators orange">&#247;</div>
        <div className="seven numbersAndOperators" onClick={insertSeven}>7</div>
        <div className="eight numbersAndOperators" onClick={insertEight}>8</div>
        <div className="nine numbersAndOperators" onClick={insertNine}>9</div>
        <div className="multiply numbersAndOperators orange">x</div>
        <div className="four numbersAndOperators" onClick={insertFour}>4</div>
        <div className="five numbersAndOperators" onClick={insertFive}>5</div>
        <div className="six numbersAndOperators" onClick={insertSix}>6</div>
        <div className="minus numbersAndOperators orange" onClick={insertSubtract}>-</div>
        <div className="one numbersAndOperators" onClick={insertOne}>1</div>
        <div className="two numbersAndOperators" onClick={insertTwo}>2</div>
        <div className="three numbersAndOperators" onClick={insertThree}>3</div>
        <div className="plus numbersAndOperators orange" onClick={insertAdd}>+</div>
        <div className="zero numbersAndOperators" onClick={insertZero}>0</div>
        <div className="decimal numbersAndOperators">.</div>
        <div className="equal numbersAndOperators orange">=</div>
    </div>
  );
};

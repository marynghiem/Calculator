import React, { ReactElement, useEffect, useState } from "react";
import "../css/Calculator.css";

export const Calculator = (): ReactElement => {
  const someNumber: number = 1;
  let someString: string = 'hi';
  const [display, setDisplay] = useState<string>("");
  const [savedNumbers, setSavedNumbers] = useState([]);
  //state for clearing display when number is click
  const [shouldClearDisplay, setShouldClearDisplay] = useState<boolean>(false);

  
//onclicks for numbers
  const insertOne = () => {
    const newDisplay1 = shouldClearDisplay ? "1" : display + "1";
    setDisplay(newDisplay1);
    setShouldClearDisplay(false);
  }
  const insertTwo = () => {
    // Check if the flag to clear the display is true, if so, clear the display first.
    const newDisplay2 = shouldClearDisplay ? "2" : display + "2";
    setDisplay(newDisplay2);
    setShouldClearDisplay(false);
  }
  const insertThree = () => {
    const newDisplay3 = shouldClearDisplay ? "3" : display + "3";
    setDisplay(newDisplay3);
    setShouldClearDisplay(false);
  }
  const insertFour = () => {
    const newDisplay4 = shouldClearDisplay ? "4" : display + "4";
    setDisplay(newDisplay4);
    setShouldClearDisplay(false);
  }
  const insertFive = () => {
    const newDisplay5 = shouldClearDisplay ? "5" : display + "5";
    setDisplay(newDisplay5);
    setShouldClearDisplay(false);
  }
  const insertSix = () => {
    const newDisplay6 = shouldClearDisplay ? "6" : display + "6";
    setDisplay(newDisplay6);
    setShouldClearDisplay(false);
  }
  const insertSeven = () => {
    const newDisplay7 = shouldClearDisplay ? "7" : display + "7";
    setDisplay(newDisplay7);
    setShouldClearDisplay(false);
  }
  const insertEight = () => {
    const newDisplay8 = shouldClearDisplay ? "8" : display + "8";
    setDisplay(newDisplay8);
    setShouldClearDisplay(false);
  }
  const insertNine = () => {
    const newDisplay9 = shouldClearDisplay ? "9": display + "9";
    setDisplay(newDisplay9)
    setShouldClearDisplay(false);
  }

  const insertZero = () => {
    const newDisplay0 = shouldClearDisplay ? "0" : display + "0";
    setDisplay(newDisplay0);
    setShouldClearDisplay(false)
  }
const clearDisplay = () => {
  setDisplay("");
  setSavedNumbers([]);
}

//useEffect to calculate the two numbers before proceeding

useEffect(() => {
  const operator = savedNumbers[savedNumbers.length - 1];


  if (savedNumbers.length > 2 && operator === '-'){
    const newValue = computeTwoNumbers();
    setSavedNumbers([newValue, "-"]);
    setDisplay(newValue);
    // Set a flag to clear the value when the next number is input
    setShouldClearDisplay(true);
  }

  if (savedNumbers.length > 2 && operator === '+'){
    const newValue = computeTwoNumbers();
    setSavedNumbers([newValue, "+"]);
    setDisplay(newValue);
    setShouldClearDisplay(true);
  }

  if(savedNumbers.length > 2 && operator === '*'){
    const newValue = computeTwoNumbers();
    setSavedNumbers([newValue, "*"]);
    setDisplay(newValue);
    setShouldClearDisplay(true);
  }

  if (savedNumbers.length > 2 && operator === '/'){
    const newValue =computeTwoNumbers();
    setSavedNumbers([newValue, "/"]);
    setDisplay(newValue);
    setShouldClearDisplay(true);
  }
  
  if (savedNumbers.length > 2 && operator === '='){
    const newValue = computeTwoNumbers();
    setSavedNumbers([newValue]);
    setDisplay(newValue);
    setShouldClearDisplay(true);
  }

}, [savedNumbers]);

// onClick for operators

const insertSubtract = () => {
  if (savedNumbers.length % 2 === 0){
    setSavedNumbers([...savedNumbers, parseFloat(display), "-"]);
  setDisplay("");
  }
  else {
    setSavedNumbers([...savedNumbers, "-"])
    setDisplay("")
  }
}

const insertAdd = () => {
  setSavedNumbers([...savedNumbers, parseFloat(display), "+"]);
  setDisplay("");
}

const insertMultiply = () => {
  setSavedNumbers([...savedNumbers, parseFloat(display), "*"]);
  setDisplay("");
}

const insertDivide = () => {
  setSavedNumbers([...savedNumbers, parseFloat(display), "/"])
  setDisplay("");
}

const insertEqual = () => {
  setSavedNumbers([...savedNumbers,parseFloat(display), "="])
  setDisplay("")
}


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

//onClick for CSS for operator button
const changeOperatorColor = () => {
  const operator = savedNumbers[savedNumbers.length - 1];
  if (operator === "+"){
    return "dark_margin";
  }
  else if (operator === "-"){
    return "dark_margin";
  }
  else if (operator === "*"){
    return "dark_margin";
  }
  else if (operator === "/"){
    return "dark_margin";
  }
  else {return ""}
}


  return (
    <div className="container">
      <div className="calculations">{display}</div>
        <div className="allClear numbersAndOperators brown" onClick={clearDisplay}>AC</div>
        <div className="positiveOrNegative numbersAndOperators brown">+/-</div>
        <div className="percent numbersAndOperators brown">%</div>
        <div className="division numbersAndOperators orange" onClick={insertDivide}>&#247;</div>
        <div className="seven numbersAndOperators" onClick={insertSeven}>7</div>
        <div className="eight numbersAndOperators" onClick={insertEight}>8</div>
        <div className="nine numbersAndOperators" onClick={insertNine}>9</div>
        <div className="multiply numbersAndOperators orange" onClick={insertMultiply}>x</div>
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
        <div className="equal numbersAndOperators orange" onClick={insertEqual}>=</div>
    </div>
  );
};

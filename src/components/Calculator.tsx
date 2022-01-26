import React, { ReactElement, useEffect, useState } from "react";
import "../css/Calculator.css";

export const Calculator = (): ReactElement => {
  const someNumber: number = 1;
  let someString: string = 'hi';
  const [display, setDisplay] = useState<string>("0");
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
    setShouldClearDisplay(false);
  }
  
  const insertDecimal = () => {
    const newDisplayDecimal = shouldClearDisplay ? "0" : display + ".";
    setDisplay(newDisplayDecimal);
    setShouldClearDisplay(false);
  }

  const clearDisplay = () => {
    setDisplay("0");
    setSavedNumbers([]);
  }

  const insertPositiveOrNegative = () => {
    let displayString = display.toString();   
    if (displayString[0] === "-"){
      setDisplay(displayString.substring(1))
      //fix this
      if (savedNumbers.length === 1){
        setSavedNumbers([parseFloat(displayString.substring(1))])
      }
    }
    else {
      setDisplay("-" + displayString) //fixed the issue that there was a "-"-4
      if (savedNumbers.length === 1){
        setSavedNumbers([parseFloat("-" + displayString)])
      }
    }
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

  if (savedNumbers.length > 2 && operator === '%'){
    const newValue = computeTwoNumbers();
    setSavedNumbers([newValue/100]);
    setDisplay(`${newValue/100}`);
    setShouldClearDisplay(true);
  }

  if (savedNumbers.length === 2 && operator === '%'){
    const newValue = savedNumbers[0]/100;
    setSavedNumbers([newValue])
    setDisplay(`${newValue}`);
    setShouldClearDisplay(true);
  }


}, [savedNumbers]);

// onClick for operators

const insertSubtract = () => {
  if (savedNumbers.length % 2 === 0){
    setSavedNumbers([...savedNumbers, parseFloat(display), "-"]);
    setShouldClearDisplay(true);
  }
  else {
    setSavedNumbers([...savedNumbers, "-"]);
    setShouldClearDisplay(true);
  }
}

const insertAdd = () => {
  if (savedNumbers.length % 2 === 0) {
    setSavedNumbers([...savedNumbers, parseFloat(display), "+"]);
    setShouldClearDisplay(true);
  }
  else {
    setSavedNumbers([...savedNumbers, "+"]);
    setShouldClearDisplay(true);
  }
}

const insertMultiply = () => {
  if (savedNumbers.length % 2 === 0){
    setSavedNumbers([...savedNumbers, parseFloat(display), "*"]);
    setShouldClearDisplay(true);
  }
  else{
    setSavedNumbers([...savedNumbers, "*"]);
    setShouldClearDisplay(true);
  }
}

const insertDivide = () => {
  if (savedNumbers.length % 2 === 0){
    setSavedNumbers([...savedNumbers, parseFloat(display), "/"])
    setShouldClearDisplay(true);
  }
  else {
    setSavedNumbers([...savedNumbers, "/"])
    setShouldClearDisplay(true);
  }
}

const insertEqual = () => {
  setSavedNumbers([...savedNumbers,parseFloat(display), "="])
}

const insertPercent = () => {
  if (savedNumbers.length % 2 === 0){
    setSavedNumbers([...savedNumbers, parseFloat(display), "%"])} //dont think i need this set display
  else {
    setSavedNumbers([savedNumbers[0], "%"]);
  }

}

// function to calculate two numbers
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
const changeAddColor = () => {
  const operator = savedNumbers[savedNumbers.length - 1];
  if (operator === "+"){
    return "darkBorder";
  }
  else {return }
}

const changeSubtractColor = () => {
  const operator = savedNumbers[savedNumbers.length - 1];
  if (operator === "-"){
    return "darkBorder";
  }
  else {return }
}
const changeDivideColor = () => {
  const operator = savedNumbers[savedNumbers.length - 1];
  if (operator === "/"){
    return "darkBorder";
  }
  else {return }
}
const changeMultiplyColor = () => {
  const operator = savedNumbers[savedNumbers.length - 1];
  if (operator === "*"){
    return "darkBorder";
  }
  else {return }
}


  return (
    <div className="container">
      <div className="calculations">{display}</div>
        <div className="allClear numbersAndOperators brown" onClick={clearDisplay}><p>AC</p></div>
        <div className="positiveOrNegative numbersAndOperators brown" onClick={insertPositiveOrNegative}><p>+/-</p></div>
        <div className="percent numbersAndOperators brown" onClick={insertPercent}><p>%</p></div>
        <div className={`division numbersAndOperators orange ${changeDivideColor()}`} onClick={insertDivide}><p>&#247;</p></div>
        <div className="seven numbersAndOperators" onClick={insertSeven}><p>7</p></div>
        <div className="eight numbersAndOperators" onClick={insertEight}><p>8</p></div>
        <div className="nine numbersAndOperators" onClick={insertNine}><p>9</p></div>
        <div className={`multiply numbersAndOperators orange ${changeMultiplyColor()}`} onClick={insertMultiply}><p>&#215;</p></div>
        <div className="four numbersAndOperators" onClick={insertFour}><p>4</p></div>
        <div className="five numbersAndOperators" onClick={insertFive}><p>5</p></div>
        <div className="six numbersAndOperators" onClick={insertSix}><p>6</p></div>
        <div className={`minus numbersAndOperators orange ${changeSubtractColor()}`} onClick={insertSubtract}><p>-</p></div>
        <div className="one numbersAndOperators" onClick={insertOne}><p>1</p></div>
        <div className="two numbersAndOperators" onClick={insertTwo}><p>2</p></div>
        <div className="three numbersAndOperators" onClick={insertThree}><p>3</p></div>
        <div className={`plus numbersAndOperators orange ${changeAddColor()}`} onClick={insertAdd}><p>+</p></div>
        <div className="zero numbersAndOperators" onClick={insertZero}><p>0</p></div>
        <div className="decimal numbersAndOperators" onClick={insertDecimal}><p>.</p></div>
        <div className="equal numbersAndOperators orange" onClick={insertEqual}><p>=</p></div>
    </div>
  );
};

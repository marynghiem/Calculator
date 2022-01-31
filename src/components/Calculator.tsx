import React, { ReactElement, useEffect, useState } from "react";
import "../css/Calculator.css";

type NumberAsString = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";

export const Calculator = (): ReactElement => {
  const [display, setDisplay] = useState<string>("0");
  const [savedNumbers, setSavedNumbers] = useState([]);
  //state for clearing display when number is click
  const [shouldClearDisplay, setShouldClearDisplay] = useState<boolean>(false);
  const [prevOperation, setPrevOperation] = useState([]);
  const [everythingClicked, setEverythingClicked] = useState([]);

  //onclicks for numbers
  const insertNumber = (numberToInsert: NumberAsString): void => {
    if (
      everythingClicked[everythingClicked.length - 1] === "equal" &&
      everythingClicked[everythingClicked.length - 2] === "number"
    ) {
      clearDisplay();
    }
    let newDisplay: string = shouldClearDisplay ? numberToInsert : display + numberToInsert;
    if (newDisplay.indexOf(".") === -1 && newDisplay[0] === "0" && newDisplay.length !== 1) {
      // trim excess leading zeroes
      newDisplay = newDisplay.substring(1);
    }
    setDisplay(newDisplay);
    setShouldClearDisplay(false);
    setEverythingClicked([...everythingClicked, "number"]);
  };

  const insertDecimal = (): void => {
    const displayString = display.toString();
    const checkDisplay = displayString.indexOf(".");
    if (checkDisplay === -1) {
      const newDisplayDecimal: string = shouldClearDisplay ? "." : display + ".";
      setDisplay(newDisplayDecimal);
      setShouldClearDisplay(false);
    }
  };

  const clearDisplay = (): void => {
    setDisplay("0");
    setSavedNumbers([]);
    setPrevOperation([]);
    setEverythingClicked([]);
    setShouldClearDisplay(false);
  };

  const insertPositiveOrNegative = (): void => {
    const displayString = display.toString();
    if (displayString[0] === "-") {
      setDisplay(displayString.substring(1));
      if (savedNumbers.length === 1) {
        setSavedNumbers([parseFloat(displayString.substring(1))]);
        //solved issues when you want to change the result to a pos/neg
      }
    } else {
      setDisplay("-" + displayString); //fixed the issue that there was a "-"-4
      if (savedNumbers.length === 1) {
        setSavedNumbers([parseFloat("-" + displayString)]);
      }
    }
  };

  //useEffect to calculate the two numbers before proceeding
  useEffect(() => {
    const operator: string = savedNumbers[savedNumbers.length - 1];
    if (savedNumbers.length > 2) {
      setPrevOperation([savedNumbers[savedNumbers.length - 3], savedNumbers[savedNumbers.length - 2]]);
    }
    if (savedNumbers.length === 2 && operator === "=") {
      setSavedNumbers([savedNumbers[0]]);
      setDisplay(`${savedNumbers[0]}`);
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length > 2 && ["-", "+", "/", "*"].includes(operator)) {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue, operator]);
      setDisplay(newValue);
      // Set a flag to clear the value when the next number is input
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length > 2 && operator === "=") {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue]);
      setDisplay(newValue);
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length > 2 && operator === "%") {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue / 100]);
      setDisplay(`${newValue / 100}`);
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length === 2 && operator === "%") {
      const newValue = savedNumbers[0] / 100;
      setSavedNumbers([newValue]);
      setDisplay(`${newValue}`);
      setShouldClearDisplay(true);
    }
  }, [savedNumbers]);

  // onClick for operators
  const insertOperator = (operator) => {
    //change operator midway
    if (everythingClicked[everythingClicked.length - 1] === "operator") {
      let savedNumbersCopy = [...savedNumbers];
      savedNumbersCopy.pop();
      savedNumbersCopy.push(operator);
      setSavedNumbers(savedNumbersCopy);
      setShouldClearDisplay(true);
    } //add operator if its even
    else if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), operator]);
      setShouldClearDisplay(true);
    } else {
      setSavedNumbers([...savedNumbers, operator]);
      setShouldClearDisplay(true);
    }
    setEverythingClicked([...everythingClicked, "operator"]);
  };

  const insertEqual = () => {
    if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), "="]);
    } else {
      setSavedNumbers([...savedNumbers, ...prevOperation, "="]);
    }
    setEverythingClicked([...everythingClicked, "equal"]);
  };

  const insertPercent = () => {
    if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), "%"]);
    } else {
      setSavedNumbers([savedNumbers[0], "%"]);
    }
  };

  // function to calculate two numbers
  const computeTwoNumbers = () => {
    if (savedNumbers[1] === "+") {
      return savedNumbers[0] + savedNumbers[2];
    } else if (savedNumbers[1] === "-") {
      return savedNumbers[0] - savedNumbers[2];
    } else if (savedNumbers[1] === "/") {
      return savedNumbers[0] / savedNumbers[2];
    } else if (savedNumbers[1] === "*") {
      return savedNumbers[0] * savedNumbers[2];
    }
  };

  console.log(prevOperation);
  console.log(savedNumbers);

  //onClick for CSS for operator button
  const changeOperatorColor = (comparisonOperator: string): string => {
    const operator = savedNumbers[savedNumbers.length - 1];
    if (operator === comparisonOperator) {
      return "darkBorder";
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <div className="calculations">{display}</div>
      <div className="allClear numbersAndOperators brown" onClick={clearDisplay}>
        <p>AC</p>
      </div>
      <div className="positiveOrNegative numbersAndOperators brown" onClick={insertPositiveOrNegative}>
        <p>+/-</p>
      </div>
      <div className="percent numbersAndOperators brown" onClick={insertPercent}>
        <p>%</p>
      </div>
      <div
        className={`division numbersAndOperators orange ${changeOperatorColor("/")}`}
        onClick={() => insertOperator("/")}
      >
        <p>&#247;</p>
      </div>
      <div className="seven numbersAndOperators" onClick={() => insertNumber("7")}>
        <p>7</p>
      </div>
      <div className="eight numbersAndOperators" onClick={() => insertNumber("8")}>
        <p>8</p>
      </div>
      <div className="nine numbersAndOperators" onClick={() => insertNumber("9")}>
        <p>9</p>
      </div>
      <div
        className={`multiply numbersAndOperators orange ${changeOperatorColor("*")}`}
        onClick={() => insertOperator("*")}
      >
        <p>&#215;</p>
      </div>
      <div className="four numbersAndOperators" onClick={() => insertNumber("4")}>
        <p>4</p>
      </div>
      <div className="five numbersAndOperators" onClick={() => insertNumber("5")}>
        <p>5</p>
      </div>
      <div className="six numbersAndOperators" onClick={() => insertNumber("6")}>
        <p>6</p>
      </div>
      <div
        className={`minus numbersAndOperators orange ${changeOperatorColor("-")}`}
        onClick={() => insertOperator("-")}
      >
        <p>-</p>
      </div>
      <div className="one numbersAndOperators" onClick={() => insertNumber("1")}>
        <p>1</p>
      </div>
      <div className="two numbersAndOperators" onClick={() => insertNumber("2")}>
        <p>2</p>
      </div>
      <div className="three numbersAndOperators" onClick={() => insertNumber("3")}>
        <p>3</p>
      </div>
      <div
        className={`plus numbersAndOperators orange ${changeOperatorColor("+")}`}
        onClick={() => insertOperator("+")}
      >
        <p>+</p>
      </div>
      <div className="zero numbersAndOperators" onClick={() => insertNumber("0")}>
        <p>0</p>
      </div>
      <div className="decimal numbersAndOperators" onClick={insertDecimal}>
        <p>.</p>
      </div>
      <div className="equal numbersAndOperators orange" onClick={insertEqual}>
        <p>=</p>
      </div>
    </div>
  );
};

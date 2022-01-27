import React, { ReactElement, useEffect, useState } from "react";
import "../css/Calculator.css";

type NumberAsString = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";

export const Calculator = (): ReactElement => {
  const [display, setDisplay] = useState<string>("0");
  const [savedNumbers, setSavedNumbers] = useState([]);
  //state for clearing display when number is click
  const [shouldClearDisplay, setShouldClearDisplay] = useState<boolean>(false);

  //onclicks for numbers
  const insertNumber = (numberToInsert: NumberAsString): void => {
    const newDisplay: string = shouldClearDisplay ? numberToInsert : display + numberToInsert;
    setDisplay(newDisplay);
    setShouldClearDisplay(false);
  };

  const insertDecimal = (): void => {
    const newDisplayDecimal: string = shouldClearDisplay ? "0" : display + ".";
    setDisplay(newDisplayDecimal);
    setShouldClearDisplay(false);
  };

  const clearDisplay = (): void => {
    setDisplay("0");
    setSavedNumbers([]);
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

    if (savedNumbers.length > 2 && operator === "-") {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue, "-"]);
      setDisplay(newValue);
      // Set a flag to clear the value when the next number is input
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length > 2 && operator === "+") {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue, "+"]);
      setDisplay(newValue);
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length > 2 && operator === "*") {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue, "*"]);
      setDisplay(newValue);
      setShouldClearDisplay(true);
    }

    if (savedNumbers.length > 2 && operator === "/") {
      const newValue = computeTwoNumbers();
      setSavedNumbers([newValue, "/"]);
      setDisplay(newValue);
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

  const insertSubtract = () => {
    if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), "-"]);
      setShouldClearDisplay(true);
    } else {
      setSavedNumbers([...savedNumbers, "-"]);
      setShouldClearDisplay(true);
    }
  };

  const insertAdd = () => {
    if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), "+"]);
      setShouldClearDisplay(true);
    } else {
      setSavedNumbers([...savedNumbers, "+"]);
      setShouldClearDisplay(true);
    }
  };

  const insertMultiply = () => {
    if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), "*"]);
      setShouldClearDisplay(true);
    } else {
      setSavedNumbers([...savedNumbers, "*"]);
      setShouldClearDisplay(true);
    }
  };

  const insertDivide = () => {
    if (savedNumbers.length % 2 === 0) {
      setSavedNumbers([...savedNumbers, parseFloat(display), "/"]);
      setShouldClearDisplay(true);
    } else {
      setSavedNumbers([...savedNumbers, "/"]);
      setShouldClearDisplay(true);
    }
  };

  const insertEqual = () => {
    setSavedNumbers([...savedNumbers, parseFloat(display), "="]);
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

  console.log(savedNumbers);

  //onClick for CSS for operator button
  const changeAddColor = () => {
    const operator = savedNumbers[savedNumbers.length - 1];
    if (operator === "+") {
      return "darkBorder";
    } else {
      return;
    }
  };

  const changeSubtractColor = () => {
    const operator = savedNumbers[savedNumbers.length - 1];
    if (operator === "-") {
      return "darkBorder";
    } else {
      return;
    }
  };
  const changeDivideColor = () => {
    const operator = savedNumbers[savedNumbers.length - 1];
    if (operator === "/") {
      return "darkBorder";
    } else {
      return;
    }
  };
  const changeMultiplyColor = () => {
    const operator = savedNumbers[savedNumbers.length - 1];
    if (operator === "*") {
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
      <div className={`division numbersAndOperators orange ${changeDivideColor()}`} onClick={insertDivide}>
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
      <div className={`multiply numbersAndOperators orange ${changeMultiplyColor()}`} onClick={insertMultiply}>
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
      <div className={`minus numbersAndOperators orange ${changeSubtractColor()}`} onClick={insertSubtract}>
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
      <div className={`plus numbersAndOperators orange ${changeAddColor()}`} onClick={insertAdd}>
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

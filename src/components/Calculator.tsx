import React, { ReactElement, useState } from "react";
import "../css/Calculator.css";

export const Calculator = (): ReactElement => {
  const someNumber: number = 1;
  const someString: string = 'hi';
  const [answer, setAnswer] = useState<number>(0);

  return (
    <div className="container">
      <div className="calculations">number</div>
        <div className="allClear numbersAndOperators brown">AC</div>
        <div className="positiveOrNegative numbersAndOperators brown">+/-</div>
        <div className="percent numbersAndOperators brown">%</div>
        <div className="division numbersAndOperators orange">&#247;</div>
        <div className="seven numbersAndOperators">7</div>
        <div className="eight numbersAndOperators">8</div>
        <div className="nine numbersAndOperators">9</div>
        <div className="multiply numbersAndOperators orange">x</div>
        <div className="four numbersAndOperators">4</div>
        <div className="five numbersAndOperators">5</div>
        <div className="six numbersAndOperators">6</div>
        <div className="minus numbersAndOperators orange">-</div>
        <div className="one numbersAndOperators">1</div>
        <div className="two numbersAndOperators">2</div>
        <div className="three numbersAndOperators">3</div>
        <div className="plus numbersAndOperators orange">+</div>
        <div className="zero numbersAndOperators">0</div>
        <div className="decimal numbersAndOperators">.</div>
        <div className="equal numbersAndOperators orange">=</div>
    </div>
  );
};

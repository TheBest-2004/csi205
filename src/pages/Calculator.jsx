import React, { useState, useEffect } from "react";
import './Calculator.css';

const Calculator = () => {
  const [screen, setScreen] = useState('0');
  const [operator, setOperator] = useState('?');
  const [state, setState] = useState('S0');
  const [firstOperand, setFirstOperand] = useState(null);

  const flashButton = (buttonId, duration = 500) => {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    const wasOrange = btn.classList.contains('cal-btn-orange');

    btn.classList.remove('cal-btn-green', 'cal-btn-blue');
    btn.classList.add('cal-btn-orange');

    setTimeout(() => {
      if (wasOrange) return;

      if (buttonId === 'plus' || buttonId === 'minus' || buttonId === 'equals') {
        btn.classList.remove('cal-btn-orange');
        btn.classList.add('cal-btn-green');
      } else {
        btn.classList.remove('cal-btn-orange');
        btn.classList.add('cal-btn-blue');
      }
    }, duration);
  };

  const updateScreen = () => {
    document.getElementById('screen').innerText = screen;

    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    plus.classList.remove('cal-btn-orange');
    plus.classList.add('cal-btn-green');
    minus.classList.remove('cal-btn-orange');
    minus.classList.add('cal-btn-green');

    if (operator === '+') {
      plus.classList.remove('cal-btn-green');
      plus.classList.add('cal-btn-orange');
    } else if (operator === '-') {
      minus.classList.remove('cal-btn-green');
      minus.classList.add('cal-btn-orange');
    }
  };

  const numberClicked = (number) => {
    flashButton(`btn-${number}`);

    if (state === 'S0') {
      setScreen(number.toString());
      setState('S1');
    } else if (state === 'S1') {
      if (screen.length < 9) {
        setScreen(screen === '0' ? number.toString() : screen + number.toString());
      }
    } else if (state === 'S2') {
      setScreen(number.toString());
      setState('S1');
    }

    updateScreen();
  };

  const OperatorClicked = (_operator) => {
    const which = _operator === '+' ? 'plus' : 'minus';
    flashButton(which);

    if (state === 'S1' || state === 'S0') {
      setFirstOperand(Number(screen));
      setOperator(_operator);
      setState('S2');
    } else if (state === 'S2') {
      setOperator(_operator);
    }

    updateScreen();
  };

  const EqualClicked = () => {
    flashButton('equals');

    if (operator !== '+' && operator !== '-') return;

    let secondOperand;
    if (state === 'S2') {
      secondOperand = firstOperand;
    } else {
      secondOperand = Number(screen);
    }

    let result = 0;
    if (operator === '+') {
      result = firstOperand + secondOperand;
    } else if (operator === '-') {
      result = firstOperand - secondOperand;
    }

    setScreen(result.toString());
    setOperator('?');
    setFirstOperand(null);
    setState('S1');

    updateScreen();
  };

  const CeClicked = () => {
    setScreen('0');
    setOperator('?');
    setFirstOperand(null);
    setState('S0');
    updateScreen();
  };

  const checkKeyboard = (event) => {
    const k = event.key;
    if (k >= '0' && k <= '9') {
      numberClicked(Number(k));
    } else if (k === '+') {
      OperatorClicked('+');
    } else if (k === '-') {
      OperatorClicked('-');
    } else if (k === 'Enter' || k === '=') {
      EqualClicked();
    } else if (k === 'Escape') {
      CeClicked();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', checkKeyboard);
    updateScreen();
    return () => document.removeEventListener('keydown', checkKeyboard);
  }, [screen, operator, state, firstOperand]);

  return (
    <div className="cal-container">
      <div>
        <div id="screen" className="cal-screen">0</div>
        <button className="cal-btn cal-btn-green" disabled>MC</button>
        <button className="cal-btn cal-btn-green" disabled>MR</button>
        <button className="cal-btn cal-btn-green" disabled>M+</button>
        <button className="cal-btn cal-btn-green" disabled>M-</button>
        <button className="cal-btn cal-btn-red" onClick={CeClicked}>CE</button>
      </div>

      <div>
        <button id="btn-7" className="cal-btn cal-btn-blue" onClick={() => numberClicked(7)}>7</button>
        <button id="btn-8" className="cal-btn cal-btn-blue" onClick={() => numberClicked(8)}>8</button>
        <button id="btn-9" className="cal-btn cal-btn-blue" onClick={() => numberClicked(9)}>9</button>
        <button className="cal-btn cal-btn-green" disabled>÷</button>
        <button className="cal-btn cal-btn-green" disabled>√</button>
      </div>

      <div>
        <button id="btn-6" className="cal-btn cal-btn-blue" onClick={() => numberClicked(6)}>6</button>
        <button id="btn-5" className="cal-btn cal-btn-blue" onClick={() => numberClicked(5)}>5</button>
        <button id="btn-4" className="cal-btn cal-btn-blue" onClick={() => numberClicked(4)}>4</button>
        <button className="cal-btn cal-btn-green" disabled>×</button>
        <button className="cal-btn cal-btn-green" disabled>%</button>
      </div>

      <div>
        <button id="btn-3" className="cal-btn cal-btn-blue" onClick={() => numberClicked(3)}>3</button>
        <button id="btn-2" className="cal-btn cal-btn-blue" onClick={() => numberClicked(2)}>2</button>
        <button id="btn-1" className="cal-btn cal-btn-blue" onClick={() => numberClicked(1)}>1</button>
        <button id="minus" className="cal-btn cal-btn-green" onClick={() => OperatorClicked('-')}>−</button>
        <button className="cal-btn cal-btn-green" disabled>1/x</button>
      </div>

      <div>
        <button id="btn-0" className="cal-btn cal-btn-blue" onClick={() => numberClicked(0)}>0</button>
        <button className="cal-btn cal-btn-blue" disabled>.</button>
        <button className="cal-btn cal-btn-blue" disabled>+/-</button>
        <button id="plus" className="cal-btn cal-btn-green" onClick={() => OperatorClicked('+')}>+</button>
        <button id="equals" className="cal-btn cal-btn-green" onClick={EqualClicked}>=</button>
      </div>

      <div className="student">ชนันนัทธ์ จำเดิม 67129307</div>
    </div>
  );
};

export default Calculator;

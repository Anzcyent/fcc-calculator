import React, { useState } from 'react'

const Calculator = () => {
    const [output, setOutput] = useState("0");

    const handleClick = e => {
        const num = e.target.textContent;

        if (output === '0') {
            setOutput(num);
        } else {
            setOutput(output + num);
        }
    }

    const handleOperator = e => {
        const op = e.target.textContent;

        const arr = String(output).split('');
        const lastEl = arr[arr.length - 1];

        if (!(/[+-/*]/).test(lastEl)) setOutput(output + op);
    }

    const handleEquals = () => {
        setOutput(eval(output))
    }
    
    const handleDecimal = () => {
        const arr = output.split('');
        let lastEl = arr[arr.length - 1];
        let isLastElNumber = /[0-9]/.test(lastEl);
        let isLastElOperator = /^[+\-*/]$/.test(lastEl);
    
        let hasDecimal = false;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === '.') {
                hasDecimal = true;
                break;
            }
            if (arr[i].match(/[+\-/*]/)) {
                break;
            }
        }
    
        if (!hasDecimal && isLastElNumber) {
            setOutput(output + '.')
        } else if (!hasDecimal && isLastElOperator) {
            setOutput(output + '0.')
        }
    }
    
    const clear = () => setOutput("0");

    return (
        <div className="calculator">
            <input id="display" style={{ gridArea: "dis" }} type="text" value={output} disabled />
            <button id="clear" style={{ gridArea: "C" }} onClick={clear}>C</button>
            <button id="divide" style={{ gridArea: "div" }} onClick={handleOperator}>/</button>
            <button id="multiply" style={{ gridArea: "times" }} onClick={handleOperator}>*</button>
            <button id="seven" style={{ gridArea: "seven" }} onClick={handleClick}>7</button>
            <button id="eight" style={{ gridArea: "eight" }} onClick={handleClick}>8</button>
            <button id="nine" style={{ gridArea: "nine" }} onClick={handleClick}>9</button>
            <button id="subtract" style={{ gridArea: "minus" }} onClick={handleOperator} >-</button>
            <button id="four" style={{ gridArea: "four" }} onClick={handleClick}>4</button>
            <button id="five" style={{ gridArea: "five" }} onClick={handleClick} >5</button>
            <button id="six" style={{ gridArea: "six" }} onClick={handleClick}>6</button>
            <button id="add" style={{ gridArea: "plus" }} onClick={handleOperator}>+</button>
            <button id="one" style={{ gridArea: "one" }} onClick={handleClick}>1</button>
            <button id="two" style={{ gridArea: "two" }} onClick={handleClick}>2</button>
            <button id="three" style={{ gridArea: "three" }} onClick={handleClick}>3</button>
            <button id="equals" style={{ gridArea: "equals" }} onClick={handleEquals}>=</button>
            <button id="zero" style={{ gridArea: "zero" }} onClick={handleClick}>0</button>
            <button id="decimal" style={{ gridArea: "dec" }} onClick={handleDecimal}>.</button>
        </div>
    )
}

export default Calculator
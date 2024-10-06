import React from "react";
import Keyboard from "./component/keyboard";
import Display from "./component/display";
import "./calculator.css";
import { useState } from "react";
import { useEffect } from "react";

const Calculator = () => {
    const [receivedData, setReceivedData] = useState("");
    const [currentSymbol, setCurrentSymbol] = useState("");
    const [result, setResult] = useState("");
    const [isFirst, setIsFirst] = useState(true);
    const [isClear, setIsClear] = useState(false);
    const [isClearAll, setIsClearAll] = useState(false);

    const inputNumber = (value) => {
        if (isClear) {
            setReceivedData(value);
            setIsClear(false);
        }
        else if (isClearAll) {
            setIsFirst(true);
            setReceivedData(value);
            setIsClearAll(false);
        }
        else {
            setReceivedData(receivedData + value);
        }
    }

    const inputSymbol = (symbol) => {
        const num = parseFloat(receivedData);
        if (isFirst) {
            setResult(num);
            setIsFirst(false);
        }
        else {
            if (currentSymbol === "+") {
                setResult(result + num);
            }
            else if (currentSymbol === "-") {
                setResult(result - num);
            }
            else if (currentSymbol === "*") {
                setResult(result * num);
            }
            else if (currentSymbol === "/") {
                setResult(result / num);
            }
        }
        setCurrentSymbol(symbol);
        if (symbol === "=") {
            setReceivedData(result);
            setIsFirst(true);
        }
        setIsClear(true);
    }


    return (
        <div className="calculator">
            <Display data={receivedData} symbol={currentSymbol} />
            <Keyboard inputNum={inputNumber} inputSymbol={inputSymbol} />
        </div>
    );
}

export default Calculator;
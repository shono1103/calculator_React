import React from "react";
import Keyboard from "./component/keyboard";
import Display from "./component/display";
import "./calculator.css";
import { useState } from "react";
import { useEffect } from "react";

const Calculator = () => {
    const [receivedData, setReceivedData] = useState("");
    const [currentSymbol, setCurrentSymbol] = useState("");
    const [result, setResult] = useState(0);
    const [isFirst, setIsFirst] = useState(true);
    const [display, setDisplay] = useState(0);

    // 数字ボタンが押された時の処理
    const pushNumber = (value) => {
        setReceivedData(receivedData + value);
        setDisplay(receivedData + value);
    }

    // ＋ー×÷ボタンが押された時の処理
    const pushSymbol = (symbol) => {
        const num = parseFloat(receivedData);
        if (isFirst) {
            setResult(num);
            setIsFirst(false);
        }
        else {
            if (currentSymbol === "+") {
                setResult(result + num);
                setDisplay(result + num);
            }
            else if (currentSymbol === "-") {
                setResult(result - num);
                setDisplay(result - num);
            }
            else if (currentSymbol === "*") {
                setResult(result * num);
                setDisplay(result * num);
            }
            else if (currentSymbol === "/") {
                setResult(result / num);
                setDisplay(result / num);
            }
        }
        setCurrentSymbol(symbol);
        Clear();
    }


    // イコールボタンが押された時の処理
    const pushEqual = (non) => {
        const num = parseFloat(receivedData);
        if (currentSymbol === "+") {
            setResult(result + num);
            setDisplay(result + num);
        }
        else if (currentSymbol === "-") {
            setResult(result - num);
            setDisplay(result - num);
        }
        else if (currentSymbol === "*") {
            setResult(result * num);
            setDisplay(result * num);
        }
        else if (currentSymbol === "/") {
            setResult(result / num);
            setDisplay(result / num);
        }
        setIsFirst(true);
        ClearAll();
    }

    // Cボタンが押された時の処理
    const Clear = () => {
        setReceivedData("");
    }

    // CAボタンが押された時の処理
    const ClearAll = () => {
        setReceivedData("");
        setCurrentSymbol("");
        setResult(0);
        setIsFirst(true);
    }

    const pushClear = (non) => {
        Clear();
        setDisplay(0);
    }

    const pushClearAll = (non) => {
        ClearAll();
        setDisplay(0);
    }




    return (
        <div className="calculator">
            <Display
                data={display}
                symbol={currentSymbol} />
            <Keyboard
                pushNum={pushNumber}
                pushSymbol={pushSymbol}
                pushEqual={pushEqual}
                pushClear={pushClear}
                pushClearAll={pushClearAll} />
        </div>
    );
}

export default Calculator;
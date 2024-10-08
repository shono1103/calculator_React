import React from "react";
import Keyboard from "./component/keyboard";
import Display from "./component/display";
import "./calculator.css";
import { useState } from "react";
import { useEffect } from "react";

const Calculator = () => {
    const [receivedData, setReceivedData] = useState("");   // 入力された値
    const [currentSymbol, setCurrentSymbol] = useState("");   // 現在の演算子
    const [result, setResult] = useState(0);    // 計算結果
    const [isFirst, setIsFirst] = useState(true);   // 最初の数文字列かどうか
    const [display, setDisplay] = useState("0");  // 表示する値
    const [existPoint, setExistPoint] = useState(false);    // 小数点が存在するかどうか


    // 数字ボタンが押された時の処理
    const pushNumber = (value) => {
        if (value === ".") {
            if (existPoint) {
                return;
            }
            setExistPoint(true);
            setDisplay(display + value);
            setReceivedData(display + value);
        }
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
                setDisplay((result + num).toString());
            }
            else if (currentSymbol === "-") {
                setResult(result - num);
                setDisplay((result - num).toString());
            }
            else if (currentSymbol === "*") {
                setResult(result * num);
                setDisplay((result * num).toString());
            }
            else if (currentSymbol === "/") {
                setResult(result / num);
                setDisplay((result / num).toString());
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
            setDisplay((result + num).toString());
        }
        else if (currentSymbol === "-") {
            setResult(result - num);
            setDisplay((result - num).toString());
        }
        else if (currentSymbol === "*") {
            setResult(result * num);
            setDisplay((result * num).toString());
        }
        else if (currentSymbol === "/") {
            setResult(result / num);
            setDisplay((result / num).toString());
        }
        setIsFirst(true);
        ClearAll();
    }

    // Cボタンが押された時の処理
    const Clear = () => {
        setReceivedData("");
        setExistPoint(false);
    }

    // CAボタンが押された時の処理
    const ClearAll = () => {
        setReceivedData("");
        setCurrentSymbol("");
        setResult(0);
        setIsFirst(true);
        setExistPoint(false);
    }

    // Cボタンが押された時の処理
    const pushClear = (non) => {
        Clear();
        setDisplay(0);
    }


    // CAボタンが押された時の処理
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
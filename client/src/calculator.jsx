import React from "react";
import Keyboard from "./component/keyboard";
import Display from "./component/display";
import "./calculator.css";
import { useState } from "react";
import { useEffect } from "react";

const Calculator = () => {
    const [data, setData] = useState("0");
    const [symbol, setSymbol] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        if (input === "CA") {
            setData("0");
            setSymbol("");
        } else if (input === "C") {
            setData("0");
        } else if (input === "=") {
            setData(eval(data).toString());
        } else {
            if (data === "0" && !isNaN(input)) {
                setData(input);
            } else {
                setData(data + input);
            }
        }
    }, [input]);

    const handleClick = (input) => {
        setInput(input);
    }

    return (
        <div className="calculator">
            <Display data={data} symbol={symbol} />
            <Keyboard input={handleClick} />
        </div>
    );
}

export default Calculator;
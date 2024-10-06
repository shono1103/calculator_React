import Button from "./keyboradComponent/button";
import "./keyboard.css";

const Keyboard = ({ inputNum, inputSymbol }) => {
    return (
        <div className="keyboard">
            <Button input={inputSymbol} name={"CA"} text={"CA"} value={null}></Button>
            <Button input={inputSymbol} name={"C"} text={"C"} value={null}></Button>
            <Button input={inputNum} name={"seven"} text={"7"} value={"7"}></Button>
            <Button input={inputNum} name={"eight"} text={"8"} value={"8"}></Button>
            <Button input={inputNum} name={"nine"} text={"9"} value={"9"}></Button>
            <Button input={inputSymbol} name={"div"} text={"÷"} value={"/"}></Button>
            <Button input={inputNum} name={"four"} text={"4"} value={"4"}></Button>
            <Button input={inputNum} name={"five"} text={"5"} value={"5"}></Button>
            <Button input={inputNum} name={"six"} text={"6"} value={"6"}></Button>
            <Button input={inputSymbol} name={"mul"} text={"×"} value={"*"}></Button>
            <Button input={inputNum} name={"one"} text={"1"} value={"1"}></Button>
            <Button input={inputNum} name={"two"} text={"2"} value={"2"}></Button>
            <Button input={inputNum} name={"three"} text={"3"} value={"3"}></Button>
            <Button input={inputSymbol} name={"sub"} text={"-"} value={"-"}></Button>
            <Button input={inputNum} name={"zero"} text={"0"} value={"0"}></Button>
            <Button input={inputNum} name={"point"} text={"."} value={"."}></Button>
            <Button input={inputSymbol} name={"equal"} text={"="} value={"="}></Button>
            <Button input={inputSymbol} name={"add"} text={"+"} value={"+"}></Button>
        </div>
    );
}

export default Keyboard;
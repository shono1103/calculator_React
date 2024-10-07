import Button from "./keyboradComponent/button";
import "./keyboard.css";

const Keyboard = ({ pushNum, pushSymbol, pushEqual, pushClear, pushClearAll }) => {
    return (
        <div className="keyboard">
            <Button input={pushClearAll} name={"CA"} text={"CA"} value={null}></Button>
            <Button input={pushClear} name={"C"} text={"C"} value={null}></Button>
            <Button input={pushNum} name={"seven"} text={"7"} value={"7"}></Button>
            <Button input={pushNum} name={"eight"} text={"8"} value={"8"}></Button>
            <Button input={pushNum} name={"nine"} text={"9"} value={"9"}></Button>
            <Button input={pushSymbol} name={"div"} text={"÷"} value={"/"}></Button>
            <Button input={pushNum} name={"four"} text={"4"} value={"4"}></Button>
            <Button input={pushNum} name={"five"} text={"5"} value={"5"}></Button>
            <Button input={pushNum} name={"six"} text={"6"} value={"6"}></Button>
            <Button input={pushSymbol} name={"mul"} text={"×"} value={"*"}></Button>
            <Button input={pushNum} name={"one"} text={"1"} value={"1"}></Button>
            <Button input={pushNum} name={"two"} text={"2"} value={"2"}></Button>
            <Button input={pushNum} name={"three"} text={"3"} value={"3"}></Button>
            <Button input={pushSymbol} name={"sub"} text={"-"} value={"-"}></Button>
            <Button input={pushNum} name={"zero"} text={"0"} value={"0"}></Button>
            <Button input={pushNum} name={"point"} text={"."} value={"."}></Button>
            <Button input={pushEqual} name={"equal"} text={"="} value={"="}></Button>
            <Button input={pushSymbol} name={"add"} text={"+"} value={"+"}></Button>
        </div>
    );
}

export default Keyboard;
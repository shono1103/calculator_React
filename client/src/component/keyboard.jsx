import Button from "./keyboradComponent/button";
import "./keyboard.css";

const Keyboard = ({ input }) => {
    return (
        <div className="keyboard">
            <Button input={input} name={"CA"} text={"CA"}></Button>
            <Button input={input} name={"C"} text={"C"}></Button>
            <Button input={input} name={"seven"} text={"7"}></Button>
            <Button input={input} name={"eight"} text={"8"}></Button>
            <Button input={input} name={"nine"} text={"9"}></Button>
            <Button input={input} name={"div"} text={"÷"}></Button>
            <Button input={input} name={"four"} text={"4"}></Button>
            <Button input={input} name={"five"} text={"5"}></Button>
            <Button input={input} name={"six"} text={"6"}></Button>
            <Button input={input} name={"mul"} text={"×"}></Button>
            <Button input={input} name={"one"} text={"1"}></Button>
            <Button input={input} name={"two"} text={"2"}></Button>
            <Button input={input} name={"three"} text={"3"}></Button>
            <Button input={input} name={"sub"} text={"-"}></Button>
            <Button input={input} name={"zero"} text={"0"}></Button>
            <Button input={input} name={"point"} text={"."}></Button>
            <Button input={input} name={"equal"} text={"="}></Button>
            <Button input={input} name={"add"} text={"+"}></Button>
        </div>
    );
}

export default Keyboard;
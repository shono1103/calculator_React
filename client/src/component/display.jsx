import Symbol from "./displayComponent/symbol"
import Result from "./displayComponent/result";
import "./display.css";


const Display = ({ data, symbol }) => {
    return (
        <div className="display">
            <Symbol symbol={symbol} />
            <Result result={data} />
        </div>
    );
}

export default Display;
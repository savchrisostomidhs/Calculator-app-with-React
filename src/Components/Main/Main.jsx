import { useEffect, useState } from "react";
import Button from "./Button"
import "./Main.css"

function Main() {
    const [result, setResult] = useState("");

    window.addEventListener("load", () => {
        document.querySelector("div.screen").innerHTML = result;
    });

    useEffect(() => {
        document.querySelector("div.screen").innerHTML = result;
    }, [result]);

    const calculateResult = () => {
        let resultArray = result.split("");
        resultArray.forEach((_, i) => {
            if (resultArray[i] === "×") {
                resultArray[i] = "*";
            }
        });

        while (resultArray[resultArray.length - 1] === "+" || resultArray[resultArray.length - 1] === "-" || resultArray[resultArray.length - 1] === "*" || resultArray[resultArray.length - 1] === "/") {
            resultArray = resultArray.slice(0, resultArray.length - 1);
        }

        while (resultArray[0] === "*" || resultArray[0] === "/") {
            resultArray = resultArray.slice(1, resultArray.length);
        }

        return eval(resultArray.join("")).toString();
    };

    const updateResult = (char) => {
        switch (char) {
            case "RESET":
                setResult("");
                break;
            case "DEL":
                setResult(result.slice(0, result.length - 1));
                break;
            case "=":
                setResult(calculateResult());
                break;
            default:
                setResult(result + char);
        }
    };

    const content = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "×", "RESET", "="];
    const buttons = [];
    for (let i = 0; i < 18; i++) {
        buttons.push(<Button key={i} className={"B" + i} content={content[i]} onClick={() => { updateResult(content[i]) }} />)
    }

    return (
        <div className='main'>
            {buttons}
        </div>
    )
}

export default Main
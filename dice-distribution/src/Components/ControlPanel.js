import React, { useContext } from "react";

import Styles from "./ControlPanel.module.css";
import Dices from "./Dices";

import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";

import { AppContext } from "../App";

const ContolPanel = (props) => {
    const {
        diceCounter,
        setDiceCounter,
        step,
        stepCounter,
        setStepCounter,
        delay,
        setDelay,
    } = useContext(AppContext);

    const infinitCheckBox = (event) => {
        if (event.target.checked) {
            setStepCounter(Infinity);
        } else {
            setTimeout(() => {
                setStepCounter(stepCounter);
            }, 100);
        }
    };

    return (
        <div className={Styles.container}>
            <div>
                <div>
                    <span for="stepInp">Step: </span>
                    <input
                        type="number"
                        id="stepInp"
                        autoComplete="off"
                        value={stepCounter}
                        onChange={(event) => setStepCounter(event.target.value)}
                    ></input>
                </div>
                <div>
                    <label for="delayInp">Delay: </label>
                    <input
                        type="number"
                        id="delayInp"
                        autoComplete="off"
                        value={delay}
                        onChange={(event) => setDelay(event.target.value)}
                    ></input>
                </div>
                <div>
                    <label for="infinitInp">Infinit </label>
                    <input
                        type="checkbox"
                        id="infinitInp"
                        onChange={(event) => infinitCheckBox(event)}
                    ></input>
                </div>
                <div>
                    <span>{stepCounter}</span>
                    <span>/</span>
                    <span>{step}</span>
                </div>
            </div>
            <div className={Styles.dicesDiv}>
                <Dices diceCounter={diceCounter} step={props.step} />
            </div>
            <div>
                <img
                    src={upArrow}
                    alt="upArrow"
                    onClick={() =>
                        setDiceCounter((prevState) =>
                            prevState < 30 ? prevState + 1 : prevState
                        )
                    }
                    style={
                        diceCounter < 30
                            ? {}
                            : { pointerEvents: "none", opacity: "0.5" }
                    }
                ></img>
                <img
                    src={downArrow}
                    alt="downArrow"
                    onClick={() =>
                        setDiceCounter((prevState) =>
                            prevState > 2 ? prevState - 1 : prevState
                        )
                    }
                    style={
                        diceCounter > 2
                            ? {}
                            : { pointerEvents: "none", opacity: "0.5" }
                    }
                ></img>
            </div>
        </div>
    );
};

export default ContolPanel;

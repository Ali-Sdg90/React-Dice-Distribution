import React, { useContext, useEffect } from "react";

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
        totalSteps,
        setTotalSteps,
    } = useContext(AppContext);

    const infinitCheckBox = (event) => {
        if (event.target.checked) {
            setStepCounter(Infinity);
        } else {
            setStepCounter(20);
        }
    };

    return (
        <div className={Styles.container}>
            <div>
                <h3>Setting</h3>
                <div>
                    <div>
                        <span for="stepInp">Step: </span>
                        <input
                            type="number"
                            id="stepInp"
                            autoComplete="off"
                            step="1"
                            min="1"
                            value={stepCounter}
                            onChange={(event) => {
                                const inputValue = parseInt(
                                    event.target.value,
                                    10
                                );
                                if (!isNaN(inputValue) && inputValue > 0) {
                                    setStepCounter(inputValue);
                                }
                            }}
                            style={
                                stepCounter === Infinity
                                    ? { pointerEvents: "none", opacity: "0.5" }
                                    : {}
                            }
                        ></input>
                    </div>
                    <div>
                        <label for="delayInp">Delay: </label>
                        <input
                            type="number"
                            id="delayInp"
                            step="1"
                            min="0"
                            autoComplete="off"
                            value={delay}
                            onChange={(event) => {
                                const inputValue = parseInt(
                                    event.target.value,
                                    10
                                );
                                if (!isNaN(inputValue) && inputValue >= 0) {
                                    setDelay(event.target.value);
                                }
                            }}
                        ></input>
                    </div>
                    <div>
                        <label for="infinitInp">Infinit Mode</label>
                        <input
                            type="checkbox"
                            id="infinitInp"
                            onChange={(event) => infinitCheckBox(event)}
                        ></input>
                    </div>
                    <div>
                        <span>Iteration: </span>
                        <span>{totalSteps}</span>
                    </div>
                    <div>Remaining</div>
                    <div>
                        <span>{stepCounter}</span>
                        <span>&nbsp;/&nbsp;</span>
                        <span>{step}</span>
                    </div>
                </div>
            </div>

            <div className={Styles.dicesDiv}>
                <Dices diceCounter={diceCounter} step={props.step} />
            </div>

            <div>
                <div className={Styles.diceCounter}>
                    <div>Number of Dises</div>
                    <div>{diceCounter}</div>
                </div>
                <img
                    src={upArrow}
                    alt="upArrow"
                    onClick={() => {
                        setDiceCounter((prevState) =>
                            prevState < 30 ? prevState + 1 : prevState
                        );
                        setTotalSteps(0);
                    }}
                    style={
                        diceCounter < 30
                            ? {}
                            : { pointerEvents: "none", opacity: "0.5" }
                    }
                ></img>
                <img
                    src={downArrow}
                    alt="downArrow"
                    onClick={() => {
                        setDiceCounter((prevState) =>
                            prevState > 2 ? prevState - 1 : prevState
                        );
                        setTotalSteps(0);
                    }}
                    style={
                        diceCounter > 2
                            ? {}
                            : { pointerEvents: "none", opacity: "0.5" }
                    }
                ></img>
                <div className={Styles.minMax}>
                    <div>
                        <span>
                            Min: <span>{diceCounter}</span>
                        </span>
                        <span>
                            Max: <span>{diceCounter * 6}</span>
                        </span>
                    </div>
                    <div>
                        Avg: <span>{diceCounter * 3.5}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContolPanel;

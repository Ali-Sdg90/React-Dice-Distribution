import React, { useState, useEffect } from "react";
import Styles from "./App.module.css";

import Chart from "./Components/Chart";
import ControlPanel from "./Components/ControlPanel";
import DiceSum from "./Components/DiceSum";
import Header from "./Components/Header";

export const AppContext = React.createContext();

const App = () => {
    const [step, setStep] = useState(10);
    const [stepCounter, setStepCounter] = useState(10);

    const [diceCounter, setDiceCounter] = useState(20);
    const [diceNumSum, setDiceNumSum] = useState(0);
    const [delay, setDelay] = useState(300);
    const [count, setCount] = useState(true);
    const [totalSteps, setTotalSteps] = useState(-1);

    useEffect(() => {
        if (step <= stepCounter) {
            setTotalSteps((prevState) => prevState + 1);
        }
        if (count && step < stepCounter) {
            const timeout = setTimeout(() => {
                setStep((prevStep) => prevStep + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [step, stepCounter]);

    useEffect(() => {
        setStep(1);
    }, [diceCounter]);

    return (
        <div className={Styles.container}>
            <AppContext.Provider
                value={{
                    diceNumSum,
                    setDiceNumSum,
                    step,
                    stepCounter,
                    setStepCounter,
                    diceCounter,
                    setDiceCounter,
                    delay,
                    setDelay,
                    totalSteps,
                }}
            >
                <Header />
                <ControlPanel step={step} />
                <DiceSum />
                {diceCounter % 2 === 0 ? <Chart /> : ""}
                {diceCounter % 2 !== 0 ? <Chart /> : ""}

                <button
                    onClick={() => {
                        setStep(1);
                        setCount(true);
                    }}
                >
                    Start
                </button>
            </AppContext.Provider>
        </div>
    );
};

export default App;

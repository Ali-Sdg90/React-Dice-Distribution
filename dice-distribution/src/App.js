import React, { useState, useEffect } from "react";
import Styles from "./App.module.css";

import Chart from "./Components/Chart";
import ControlPanel from "./Components/ControlPanel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export const AppContext = React.createContext();

const App = () => {
    const [step, setStep] = useState(10);
    const [stepCounter, setStepCounter] = useState(10);

    const [diceCounter, setDiceCounter] = useState(22);

    const [diceNumSum, setDiceNumSum] = useState(0);

    const countSteps = () => {
        setStep(1);
    };

    useEffect(() => {
        if (step < stepCounter) {
            const timeout = setTimeout(() => {
                setStep((prevStep) => prevStep + 1);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [step, stepCounter]);

    return (
        <div className={Styles.container}>
            <AppContext.Provider
                value={{
                    diceNumSum,
                    setDiceNumSum,
                    step,
                    diceCounter,
                    setDiceCounter,
                }}
            >
                <Header />
                <ControlPanel />
                <Chart />
                <button onClick={countSteps}>Start</button>
                {/* <Footer /> */}
            </AppContext.Provider>
        </div>
    );
};

export default App;

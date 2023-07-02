import React, { useState, useEffect } from "react";
import Styles from "./App.module.css";

import Chart from "./Components/Chart";
import ControlPanel from "./Components/ControlPanel";
import DiceSum from "./Components/DiceSum";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export const AppContext = React.createContext();

const App = () => {
    const [step, setStep] = useState(10);
    const [stepCounter, setStepCounter] = useState(10);

    const [diceCounter, setDiceCounter] = useState(22);

    let diceNumSum = 0;

    useEffect(() => {
        if (step < stepCounter) {
            const timeout = setTimeout(() => {
                setStep((prevStep) => prevStep + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [step, stepCounter]);

    return (
        <div className={Styles.container}>
            <AppContext.Provider
                value={{
                    diceNumSum,
                    step,
                    diceCounter,
                    setDiceCounter,
                }}
            >
                <Header />
                <ControlPanel />
                <DiceSum />
                <Chart />
                <button onClick={() => setStep(1)}>Start</button>
                {/* <Footer /> */}
            </AppContext.Provider>
        </div>
    );
};

export default App;

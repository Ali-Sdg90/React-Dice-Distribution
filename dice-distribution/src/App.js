import React from "react";
import Styles from "./App.module.css";

import Chart from "./Components/Chart";
import ContolPanel from "./Components/ContolPanel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
    return (
        <div className={Styles.container}>
            <Header />
            <ContolPanel />
            <Chart />
            <Footer />
        </div>
    );
};

export default App;

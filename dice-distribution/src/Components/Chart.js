import React from "react";
import ApexCharts from "./ApexCharts";

import Styles from "./Chart.module.css";

const Chart = () => {
    return (
        <div className={Styles.container}>
            <ApexCharts />
        </div>
    );
};

export default Chart;

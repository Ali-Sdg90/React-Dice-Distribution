import React, { useContext, useEffect, useState } from "react";
import Styles from "./ApexCharts.module.css";
import Chart from "react-apexcharts";
import { AppContext } from "../App";

const ApexCharts = () => {
    const { diceNumSum, diceCounter } = useContext(AppContext);

    const emptyPlaceholderMaker = () => {
        let emptyPlaceholder = [];
        for (let i = diceCounter * 3; i < diceCounter * 5; i++) {
            emptyPlaceholder.push(i);
        }
        return emptyPlaceholder;
    };

    const [options, setOptions] = useState({
        chart: {
            id: "dice-distribution",
        },
        xaxis: {
            categories: emptyPlaceholderMaker(),
        },
    });

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: emptyPlaceholderMaker(),
        },
    ]);

    useEffect(() => {
        let newCategories = [];
        for (let i = diceCounter * 3; i < diceCounter * 5; i++) {
            newCategories.push(i);
        }
        setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
                ...prevOptions.xaxis,
                categories: newCategories,
            },
        }));
        setSeries([
            {
                ...series[0],
                data: emptyPlaceholderMaker(),
            },
        ]);
    }, [diceCounter]);

    return (
        <div className={Styles.container}>
            <Chart
                options={options}
                series={series}
                type="bar"
                width={1150}
                height={220}
            />
        </div>
    );
};

export default ApexCharts;

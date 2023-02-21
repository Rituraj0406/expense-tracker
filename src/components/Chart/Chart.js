import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart mb-6'>
            {props.dataPoints.map((dataPoint) => 
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    lable={dataPoint.label} 
                />)}
        </div>
    );
}

export default Chart;
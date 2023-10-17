import React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const Root = props => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = props => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

function ChartAssignment(props) {
    const chartData = props.data;

    return (
        <div className='content-div'>
            <div>
                <h1>Assigned cases</h1>
                <Chart data={chartData} className='chartdataView'>
                    <ArgumentAxis />
                    <ValueAxis />
                    <BarSeries
                        name="Cases"
                        valueField="amountCases"
                        argumentField="type"
                        color="#2D4F95"
                    />
                    <BarSeries
                        name="Collabs"
                        valueField="amountCollab"
                        argumentField="type"
                        color="#1B1B1B"
                    />
                    <BarSeries
                        name="Follow ups"
                        valueField="amountFollowups"
                        argumentField="type"
                        color="#D51B1B"
                    />
                    <Animation />
                    {/* <Legend position="bottom" rootComponent={Root} labelComponent={Label} /> */}
                    <Stack />
                </Chart>
            </div>
        </div>
    );
};

export default ChartAssignment;
import React from 'react';
import { Line, LineChart } from 'recharts';

function TinyLineChart({ data, color }) {
  return (
    <LineChart width={70} height={45} data={data}>
      <Line type="monotone" dataKey="value" stroke={color} strokeWidth={1} dot={false} />
    </LineChart>
  );
}

export default TinyLineChart;

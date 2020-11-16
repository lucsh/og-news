import React, { Fragment, useEffect, useState } from 'react';
import { Line, LineChart } from 'recharts';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import TinyLineChart from './TinyLineChart';

import config from '../config';

dayjs.locale('es');

const { eiaApiKey } = config;

function Chart({ data, color }) {
  return (
    <LineChart width={90} height={50} data={data}>
      <Line type="monotone" dataKey="value" stroke={color} strokeWidth={1} dot={false} />
    </LineChart>
  );
}

function MedanitoCard() {
  const graphData = [
    {
      month: '05',
      value: 31.52,
    },
    {
      month: '06',
      value: 35.37,
    },
    {
      month: '07',
      value: 41.75,
    },
    {
      month: '08',
      value: 43.33,
    },
    {
      month: '09',
      value: 41.82,
    },
    {
      month: '10',
      value: 40.04,
    },
  ];

  const data = {
    time: 1604102400,
    price: 40.04,
    change: -1.78,
    change_percent: -4.45,
  };

  const [color, setColor] = useState('#19be87');

  useEffect(() => {
    setColor(data?.change < 0 ? '#f72121' : '#19be87');
  }, [data]);
  return (
    <div className="flex py-4 px-6 flex-wrap w-48 ">
      <div className="font-bold">MEDANITO</div>

      <div className="flex flex-col md:flex-row">
        <div className="p-4 w-full hidden md:block md:w-1/2 ">
          <TinyLineChart data={graphData} color={color} />
        </div>
        <div className="flex flex-col w-1/2 mt-auto self-end sm:w-full">
          <div className="text-xl text-right">{data?.price}</div>
          <div className="text-right text-sm" style={{ color }}>
            {data?.change?.toFixed(2)}
          </div>
          <div className="text-right text-xs" style={{ color }}>
            ({data?.change_percent?.toFixed(2)}%)
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full text-xs text-left text-gray-500">
        {dayjs.unix(data?.time).format('DD-MM-YYYY')}
      </div>
    </div>
  );
}

export default MedanitoCard;

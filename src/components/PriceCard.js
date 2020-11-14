import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import TinyLineChart from './TinyLineChart';

dayjs.locale('es');

function PriceCard({ title, chartSource, dataSource }) {
  const [graphData, setGraphData] = useState([]);
  const [data, setData] = useState({});
  const [color, setColor] = useState('#19be87');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(dataSource);
      setColor(data.change < 0 ? '#f72121' : '#19be87');
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchGraphData = async () => {
      const result = await axios(chartSource);

      const data = result.data?.series[0].data;

      const currentYear = new Date().getFullYear();
      const rta = data.reduce((results, item) => {
        if (item[0].startsWith(currentYear)) results.unshift({ month: item[0].slice(-2), value: item[1] });
        return results;
      }, []);

      setGraphData(rta);
    };
    fetchGraphData();
  }, []);

  return (
    <div className="flex p-4 mx-2 flex-wrap w-48">
      <div className="font-bold">{title}</div>

      <div className="flex flex-col md:flex-row">
        <div className="p-4 w-full md:w-1/2 ">
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
      <div className="w-full text-xs text-right text-gray-500">{dayjs.unix(data?.time).format('DD-MM-YYYY HH:mm')}</div>
    </div>
  );
}

export default PriceCard;

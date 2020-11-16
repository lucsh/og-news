import React, { useEffect, useState } from 'react';
import PriceCard from './PriceCard';
import MedanitoCard from './MedanitoCard';
import config from '../config';

import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
const { eiaApiKey } = config;

function SubHeader() {
  const [date, setDate] = useState('');

  useEffect(() => {
    let fecha = dayjs().format('dddd D [de] MMMM [de] YYYY');
    fecha = fecha[0].toUpperCase() + fecha.slice(1);
    setDate(fecha);
  }, []);

  return (
    <div className="w-screen bg-body flex flex-col md:flex-row justify-between p-4">
      <div>{date}</div>
      <div className="flex flex-row">
        <PriceCard
          title={'BRENT'}
          chartSource={`http://api.eia.gov/series/?api_key=${eiaApiKey}&series_id=STEO.BREPUUS.M`}
          dataSource={'https://s3.amazonaws.com/oilprice.com/widgets/oilprices/46/last.json'}
        />
        <PriceCard
          title={'WTI'}
          chartSource={`http://api.eia.gov/series/?api_key=${eiaApiKey}&series_id=PET.RWTC.D`}
          dataSource={'https://s3.amazonaws.com/oilprice.com/widgets/oilprices/45/last.json'}
        />
        <MedanitoCard />
      </div>
    </div>
  );
}

export default SubHeader;

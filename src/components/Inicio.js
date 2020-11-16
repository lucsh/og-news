import React from 'react';
import Apertura from './Apertura';
import Publicidad from './Publicidad';
import Divider from './Divider';
import ArticleGrid from './ArticleGrid';

const articles = [
  {
    id: 1,
    titulo: 'Calf gestiona 8 millones de dólares para su plan de obras en Neuquén',
    categorias: ['ENERGIA', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-11 13:00:00',
    copete:
      'La cooperativa concentrará las inversiones en el extremo oeste de la ciudad, en línea con los proyectos de infraestructura pública y privada. Se financiará con fondos propios, de Provincia y Nación y se ejecutará en tres años.',
    foto: 'https://www.rionegro.com.ar/wp-content/uploads/2020/11/YAM_2445.jpg',
  },
  {
    id: 2,
    titulo: 'GeoPark realizó su plan 2021 con un barril tope de 45 dólares',
    categorias: ['ENERGIA', 'OIL&GAS', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-10 14:00:00',
    copete:
      'No proyectan nuevos pozos para la Cuenca Neuquina y concentrarán su desarrollo en Colombia. Estiman invertir entre 100 a 120 millones de dólares con capital propio.',
    foto: 'https://www.rionegro.com.ar/wp-content/uploads/2020/11/GP3a.png?w=920&h=517&resize=920,517',
  },
  {
    id: 3,
    titulo: 'Estaciones de servicio evalúan pagar aguinaldos en cuotas',
    categorias: ['ENERGIA', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-10 10:00:00',
    copete:
      'La exclusión de los ATP dejó al sector de expendio de combustibles en una situación crítica. Analizan diversas medidas para evitar despidos.',
    foto: 'https://www.rionegro.com.ar/wp-content/uploads/2020/11/in11dex.png?w=920&h=517&resize=920,517',
  },
  {
    id: 4,
    titulo: 'Calf y el Epen acordaron el traspaso de una estación transformadora y de activos',
    categorias: ['ENERGIA', 'REGIONAL'],
    fecha: '2020-11-09 09:00:00',
    copete:
      'Las partes firmaron cuatro convenios con el objetivo de mejorar el servicio de distribución en Neuquén. La Estación Transformadora (ET) Argentina pasó a manos de la cooperativa.',
    foto: 'https://www.rionegro.com.ar/wp-content/uploads/2020/11/index.jpg?w=920&h=517&resize=920,517',
  },
  {
    id: 5,
    titulo: 'Sigue estancado el consumo de combustibles',
    categorias: ['ENERGIA', 'OIL&GAS', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-08 10:00:00',
    copete:
      'Los volúmenes de venta de naftas y gasoil continúan un 25% por debajo de los valores prepandemia. Septiembre fue el cuarto mes consecutivo sin crecimiento a nivel país.',
    foto:
      'https://www.rionegro.com.ar/wp-content/uploads/2020/11/Allen-YPF-Allen-Juan-Thomes-1.png?w=920&h=517&resize=920,517',
  },
  {
    id: 6,
    titulo: 'Estaciones de servicio de la región acordaron un 12% de aumento',
    categorias: ['ENERGIA', 'OIL&GAS', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-08 09:00:00',
    copete:
      'Será en tres pagos y en diciembre se volverán a reunir para evaluar la situación. Además, se sumó al básico un bono de $4.000 que era no remunerativo.',
    foto:
      'https://www.rionegro.com.ar/wp-content/uploads/2020/11/5622e36d-1970-4fe0-b4ed-a37d02bc65e7-e1597849760119.png?w=920&h=517&resize=920,517',
  },
  {
    id: 7,
    titulo: 'Se destinaron casi 4.000 millones de dólares en subsidios a la energía',
    categorias: ['ENERGIA', 'OIL&GAS'],
    fecha: '2020-11-07 09:00:00',
    copete:
      'En el acumulado hasta agosto pasado las transferencias para gastos corrientes aumentaron un 80,5% respecto al año anterior. Cammesa se llevó más de la mitad del presupuesto.',
    foto:
      'https://www.rionegro.com.ar/wp-content/uploads/2020/11/Ag-nqn-inversion-millonaria-para-vaca-muerta-salto-12.png?w=920&h=517&resize=920,517',
  },
  {
    id: 8,
    titulo: 'Phoenix mostró el impacto del coronavirus en su negocio',
    categorias: ['ENERGIA', 'OIL&GAS', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-07 08:00:00',
    copete:
      'La compañía de upstream registró caídas interanuales en sus resultados operativos y financieros durante la primera mitad del año. Redujeron costos y reabrieron los pozos que cerraron por la caída en la demanda.',
    foto:
      'https://www.rionegro.com.ar/wp-content/uploads/2020/10/Imagen-Imagen-05-06-2018-NEUQUEN-PETROLEO-11205973.jpg?w=920&h=517&resize=920,517',
  },
];

function Inicio(props) {
  return (
    <div>
      <Apertura />
      <Divider />
      <Publicidad size="small" />
      <Divider />
      <ArticleGrid articles={articles} titulo="Últimas Noticias" />
    </div>
  );
}

export default Inicio;

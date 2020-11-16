import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Publicidad from './Publicidad';
import StickyBox from 'react-sticky-box';
import Relacionada from './Relacionada';
import Divider from './Divider';

function Noticia(props) {
  const noticia = {
    id: 2,
    titulo: 'GeoPark realizó su plan 2021 con un barril tope de 45 dólares',
    categorias: ['ENERGIA', 'OIL&GAS', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-10 14:00:00',
    copete:
      '<strong>No proyectan nuevos pozos para la Cuenca Neuquina y concentrarán su desarrollo en Colombia.</strong> Estiman invertir entre 100 a 120 millones de dólares con capital propio.',
    foto: 'https://www.rionegro.com.ar/wp-content/uploads/2020/11/GP3a.png?w=920&h=517&resize=920,517',
    epigrafe:
      'Las tareas operativas en la Cuenca Neuquina estarán enfocadas en la reparación de pozos para evitar mayores declinos. (Foto: gentileza)',
    cuerpo: `
     <p>A medida que se acerca el fin de uno de los años más difíciles para la industria petrolera, las compañías comienzan a esbozar planes de inversión para el próximo año y entre las proyecciones revelan las estimaciones que tienen para el barril. <strong>Para la compañía productora y exploradora, GeoPark, el escenario más probable es que el petróleo oscile entre 40 y 45 dólares.</strong></p>
    <p>Con ese valor la petrolera realizó un plan de inversiones que estará entre <strong>los 100 y 120 millones de dólares con capital propio </strong>en el que destinará aproximadamente el<strong> 65% para nuevos desarrollos</strong> y el 35 restante para actividades de exploración. Estará principalmente concentrado en sus activos en Colombia.&nbsp;&nbsp;</p>
    <p>“Con la estimación del precio de base de entre 40 a 45 dólares por barril Brent, GeoPark puede ejecutar un programa de trabajo con balance de riesgos para continuar haciendo crecer su negocio”, precisaron desde la compañía a través de un comunicado oficial.&nbsp;&nbsp;</p>
    <p><strong>La Cuenca Neuquina no aparece dentro de la carpeta de nuevos pozos de la compañía para el próximo año ni tampoco dentro de los planes exploratorios, </strong>al menos, dentro de la primera proyección que se fijó a casi un mes y medio de culminar el año. Lo mismo sucede para Chile y Brasil donde se bocetó proyectos similares.&nbsp;&nbsp;</p>
    <p>Según precisaron desde la compañía<strong> también continuarán con el programa de becas universitarias para mujeres en ciencias e ingenierías</strong>, en cual cuentan con 7 becarias de Neuquén. Por otra parte, también seguirán con talleres y actividades de transferencia de conocimientos como el que se realizó de ciberseguridad y otros temas para docentes y alumnos junto con el ministerio de Educación de Neuquén.&nbsp;</p>
    <p>“<strong>Actividades de intervención de pozos e instalaciones para mejorar niveles de producción bas</strong>e”, es precisamente lo que adelantó la compañía que hará en esos tres países. Para esto la firma destinará hasta 2 millones de dólares para evitar declinos pronunciados.&nbsp;</p>
    <p><strong>Desde los primeros días de septiembre que el precio del Brent no superaba la línea de los 45 dólares</strong> y esta semana sucedió y su impulso se dio luego de los anuncios de varias empresas sobre los avances de la vacuna para el Covid-19. Si la demanda responde mejor que lo que se proyectó hasta ahora,<strong> podría haber un piso de US$ 45 en lugar de un techo para el próximo año</strong> y eso indudablemente deja la puerta abierta para ampliar desarrollos.&nbsp;&nbsp;</p>
    <p><strong>Para su core de áreas en Colombia GeoPark desembolsará el grueso de las inversiones serán de hasta 115 millones de dólares</strong> con un piso en US$ 95 millones. Perforarán hasta 28 pozos productivos y 6 exploratorios.&nbsp;&nbsp;</p>
    <p>“El programa de trabajo de GeoPark para 2021 es autofinanciado y con riesgo equilibrado destinado a proporcionar valor tangible a sus accionistas a través de rendimientos de valor y el desarrollo continuo de su exclusiva cartera de proyectos de bajo costo y bajo riesgo”, detallaron de la firma y se explica el grueso de inversiones en Colombia.&nbsp;&nbsp;</p>
    <p>En Ecuador invertirán hasta 5 millones de dólares para hacer tareas de sísmica y otras actividades preliminares para preparar la perforación en dos bloques durante la segunda mitad del año y comienzos del 2022.&nbsp;&nbsp;&nbsp;</p>
    <p>Por último, <strong>con estas inversiones la petrolera busca alcanzar la producción de 42.000 barriles equivalentes de petróleo</strong> para el próximo. La estimación se desprende de la sumatoria de todo el acreaje de la firma.&nbsp;</p>
`,
  };
  const relacionado = {
    id: 3,
    titulo: 'Estaciones de servicio evalúan pagar aguinaldos en cuotas',
    categorias: ['ENERGIA', 'COMBUSTIBLES', 'REGIONAL'],
    fecha: '2020-11-10 10:00:00',
    copete:
      'La exclusión de los ATP dejó al sector de expendio de combustibles en una situación crítica. Analizan diversas medidas para evitar despidos.',
    foto: 'https://www.rionegro.com.ar/wp-content/uploads/2020/11/in11dex.png?w=920&h=517&resize=920,517',
  };

  function createMarkup(__html) {
    return { __html };
  }

  const parrafos = noticia.cuerpo.split(/<p>(.*)<\/p>/gim).filter((x) => x.trim() !== '');
  const ubicacionPublicidad = Math.round(parrafos.length / 2);
  return (
    <div className="flex flex-wrap">
      <div className="md:order-2 md:w-1/4">
        <div className=" hidden md:block">
          <div className="font-bold">Noticias Relacionadas</div>
          <Relacionada article={relacionado} />
        </div>
        <StickyBox>
          <Publicidad size="large" />
        </StickyBox>
        <Divider />
      </div>

      <div className="articulo w-full md:order-first md:w-3/4 p-4">
        <div className="titulo text-3xl md:text-5xl">{noticia.titulo}</div>
        <div className="copete p-1 md:text-xl md:p-4" dangerouslySetInnerHTML={createMarkup(noticia.copete)} />

        <div
          className="h-screen-1/2 bg-no-repeat bg-cover lg:-ml-8"
          style={{ backgroundImage: `url(${noticia.foto})` }}
        />
        <div className="epigrafe p-1 text-sm md:p-4" dangerouslySetInnerHTML={createMarkup(noticia.epigrafe)} />

        <div className="cuerpo p-1 text-lg leading-8 ">
          {parrafos.map((parrafo, index) => {
            return (
              <Fragment>
                {index === ubicacionPublicidad ? <Publicidad size="mobile" className="m-4" /> : null}
                <p key={index} dangerouslySetInnerHTML={createMarkup(parrafo)} className="py-2" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Noticia);

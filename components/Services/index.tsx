import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

import { GiTeacher, GiLightBulb, GiBrain } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <ServicesContainer id="servicios">
        <ServicesH1>Servicios</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <GiTeacher size={40} color="#4B59F7" />
            <ServicesH2>Tutorias</ServicesH2>
            <ServicesP>
              Acompañamiento personalizado con el objetivo de mejorar el
              rendimiento escolar, solucionar problemas escolares y desarrollar
              hábitos de estudio
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <GiLightBulb size={40} color="#4B59F7" />
            <ServicesH2>Investigación</ServicesH2>
            <ServicesP>
              Este Servicio tiene como objetivo dar apoyo técnico e instrumental
              a la investigación y docencia universitarias, y también, a las
              empresas públicas o privadas que componen el tejido industrial del
              entorno que lo soliciten.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <GiBrain size={40} color="#4B59F7" />
            <ServicesH2>Asesoría Psicosocial</ServicesH2>
            <ServicesP>
              Espacio de atención que se ofrece a la comunidad el mejoramiento
              del manejo de las emociones, promoviendo la comunicación asertiva
              y la resolución de conflictos por vías distintas a cualquier tipo
              de violencia
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

import Image from "next/image";
import harina from "../../assets/harina.jpg";
import cuchillo from "../../assets/cuchillo.jpg";
import pasta from "../../assets/pasta.jpg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="servicios">
        <ServicesH1>Productos</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <Image src={harina} width={100} height={100} alt="torta" />
            <ServicesH2>Harina Doña Torta</ServicesH2>
            <ServicesP>
              Prepara una deliciosa Torta Casera con Harina de Trigo Paspán
              INGREDIENTES: 1/2 libra mantequilla 1 taza azúcar 2 tazas harina
              de trigo tamizada (con un colador metálico) 1/2 taza leche 3
              huevos...
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <Image src={cuchillo} width={100} height={100} alt="cuchillo" />
            <ServicesH2>Cuchillo De Chef Profesional Fzizuo</ServicesH2>
            <ServicesP>
              FZIZUO Cuchillo de chef de estilo japonés profesional, completo
              Tang 8.3 pulgadas hecho a mano VG10 Damasco hoja de acero Burl
              mango madera Gyuto cuchillos de cocina con vaina para cocinar
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <Image src={pasta} width={100} height={100} alt="pasta" />
            <ServicesH2>Asesoría Psicosocial</ServicesH2>
            <ServicesP>
              Pastas La Muñeca te da momentos que te recargan de energía; no
              contiene aditivos. Disfruta de una gran variedad de opciones para
              deleitar las más deliciosas pastas.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

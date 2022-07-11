import React from "react";
import { CardContainer, ImgBox } from "./CardHoverElements";
//import icfavorite from "../../images/ic-favorite.svg";
import icfavorite from "../../assets/ic-favorite.svg";
import icstart from "../../assets/ic_star.svg";
import { IoIosRestaurant, IoIosClock } from "react-icons/io";
import { GiCook } from "react-icons/gi";

import Image from "next/image";

const CardHover = (props) => {
  return (
    <CardContainer>
      <ImgBox>
        <Image src={props.imagen} alt="img" width={150} height={150} />
      </ImgBox>
      <div className="content">
        <div className="details">
          <h2>Ensalada Cesar</h2>
          <div className="iconos">
            <div className="left">
              <Image src={icstart} alt="img" />
              <h2>4.0</h2>
            </div>
            <div className="right">
              <Image src={icfavorite} alt="img" />
            </div>
          </div>
          <div className="data">
            <div className="pasos">
              <IoIosRestaurant />
              <h3>
                Tamaño de la porción
                <br />
                <span>4 Raciones</span>
              </h3>
            </div>
            <div className="pasos">
              <IoIosClock />
              <h3>
                Tiempo de preparación
                <br />
                <span>10 minutos</span>
              </h3>
            </div>
            <div className="pasos">
              <GiCook />
              <h3>
                Dificultad
                <br />
                <span>Facil</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardHover;

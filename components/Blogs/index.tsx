import Image from "next/image";
import React from "react";
import styled from "styled-components";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const Blogs = () => {
  const images = [
    {
      picture: blog1,
      title: "Pancartas Personalizadas",
      description:
        "Las pancartas de vinilo son un medio útil y efectivo que sirve para diversos propósitos personales y de marketing. ",
    },
    {
      picture: blog2,
      title: "Pancartas Comerciales",
      description:
        "Instalar una pancarta de vinilo en las exposiciones significa que se beneficiará enormemente de sus características y ventajas.",
    },
    {
      picture: blog3,
      title: "Pancartas Informativas",
      description:
        "¿Estás lanzando tu marca o actualizando tus servicios? Obtenga pancartas de apertura para que las personas estén alertas a  cambios futuros.",
    },
  ];

  return (
    <Section id="blog">
      <div className="title">
        <h2>Servicios!</h2>
        <h5>Donde te puedes promocionar!</h5>
      </div>
      <div className="blogs">
        {images.map(({ picture, title, description }) => {
          return (
            <div className="blog" key={title}>
              <div className="image-wrapper">
                <Image src={picture} alt="imagen" />
              </div>
              <div className="data">
                <p
                  style={{
                    color: "#10aec1",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Blogs;

const Section = styled.div`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: #fff;
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      .image-wrapper {
        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }

      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

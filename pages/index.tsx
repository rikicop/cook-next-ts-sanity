import WhatsAppButton from "../components/WhatsAppButton";
//import Hero from "../components/Hero";
import Services from "../components/Services";
import Acerca from "../components/Acerca";

import { /* homeObjOne */ homeObjFour } from "../DataHero";
import { recetas } from "../DataRecipes";

import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import CardList from "../components/CardList";
import CardHover from "components/CardHover";
import Navbar from "components/Navbar";

import styled from "styled-components";

const WrapperCardHover = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 6rem;
  justify-content: center;
`;

const TitleHover = styled.h1`
  margin-top: 7rem;
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  align-self: center;
  text-align: center;
`;

export default function Home({ posts, tendencias }: any) {
  //const [mappedPosts, setMappedPosts] = useState([]);
  const [mappedTendencias, setMappedTendecias] = useState([]);
  console.log("mappedTendencias :", mappedTendencias);
  useEffect(() => {
    if (posts.length && tendencias.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "rfzuszbb",
        dataset: "production",
      });
      /*  setMappedPosts(
        posts.map((p: any) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      ); */
      setMappedTendecias(
        tendencias.map((p: any) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      //setMappedPosts([]);
      setMappedTendecias([]);
    }
  }, [posts, tendencias]);
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      {/*  <Hero {...homeObjOne} /> */}
      {/* Problemas Contenido Topline muy largo */}
      {/* <About {...homeObjTwo} />  */}
      <Acerca {...homeObjFour} />
      <Services />
      {/* Blogs */}
      {/*    {mappedPosts.length ? (
        <CardList data={mappedPosts} title="Blog" pSlug="post" />
      ) : (
        <p>No posts found</p>
      )} */}
      {/* Tendencias */}
      {mappedTendencias.length ? (
        <CardList
          data={mappedTendencias}
          title="Tendencias"
          pSlug="tendencia"
        />
      ) : (
        <p>No posts found</p>
      )}
      {/* Recetas */}
      <section id="receta">
        <TitleHover>Recetas</TitleHover>
        <WrapperCardHover>
          {recetas.map((a, index) => (
            <CardHover
              imagen={a.imagen}
              title={a.title}
              description={a.description}
              receta={a.receta}
              key={index}
            />
          ))}
        </WrapperCardHover>
      </section>

      {/* <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      <Blogs /> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = encodeURIComponent('*[_type == "post"]');
  const queryTendencia = encodeURIComponent('*[_type == "tendencia"]');
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const urlTendencia = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${queryTendencia}`;
  const result = await fetch(url).then((res) => res.json());
  const resultTendecia = await fetch(urlTendencia).then((res) => res.json());
  if (
    !result.result ||
    !result.result.length ||
    !resultTendecia.result ||
    !resultTendecia.result.length
  ) {
    return {
      props: {
        posts: [],
        tendencias: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
        tendencias: resultTendecia.result,
      },
    };
  }
};

import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
// About from "../components/About";
import Services from "../components/Services";
import Acerca from "../components/Acerca";

import { homeObjOne, homeObjFour } from "../DataHero";
//import { articles } from "../data";

import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import CardList from "../components/CardList";
import Navbar from "components/Navbar";

export default function Home({ posts: posts }: any) {
  const [mappedPosts, setMappedPosts] = useState([]);
  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "zvusid2u",
        dataset: "production",
      });
      setMappedPosts(
        posts.map((p: any) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      <Hero {...homeObjOne} />
      {/* Problemas Contenido Topline muy largo */}
      {/* <About {...homeObjTwo} />  */}
      <Acerca {...homeObjFour} />
      <Services />
      {/* Blogs */}
      {mappedPosts.length ? (
        <CardList data={mappedPosts} title="Blog" />
      ) : (
        <p>No posts found</p>
      )}
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
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};

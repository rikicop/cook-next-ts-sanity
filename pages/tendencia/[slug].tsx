import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Toolbar from "../../components/Toolbar";
import { PostType } from "../../typings";

import styled from "styled-components";

const Main = styled.div`
  margin: auto;
  //this top margin is just for landscape
  margin-top: 1rem;
  width: 750px;
  max-width: calc(100vw - 50px);
  //media for large screens
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  padding-bottom: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 3rem;
  }
`;

const MainImage = styled.img`
  width: 100%;
`;

const Body = styled.div`
  p {
    font-size: 24px;
    /* text-indent: 10px; */
    line-height: 45px;
    letter-spacing: 1.5px;
    text-align: justify;
  }
  //media for mobile
  @media (max-width: 768px) {
    p {
      font-size: 18px;
      text-indent: 0;
      line-height: 25px;
      text-align: left;
    }
  }
`;

interface Props {
  post: PostType;
}

function Tendencia({ post }: Props) {
  const [imageUrl, setImageUrl] = useState("");
  console.log("POST: ", post);

  useEffect(() => {
    const imgBuilder: any = imageUrlBuilder({
      projectId: "rfzuszbb",
      dataset: "production",
    });
    setImageUrl(imgBuilder.image(post.mainImage));
  }, [post.mainImage]);
  return (
    <div>
      <Toolbar />
      <Main>
        <Title>{post.title}</Title>
        {imageUrl && <MainImage src={imageUrl} />}
        <Body>
          <BlockContent blocks={post.body} />
        </Body>
      </Main>
    </div>
  );
}

export default Tendencia;

export const getServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;

  if (!slug) {
    return { notFound: true };
  }
  const query = encodeURIComponent(
    `*[_type == "tendencia" && slug.current == "${slug}"]{
         _id,
        _createdAt,
        title,
        mainImage,
        slug,
        body
}`
  );
  const url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: {
        post,
      },
    };
  }
};

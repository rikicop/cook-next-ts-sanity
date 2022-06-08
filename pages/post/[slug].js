import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { Main, MainImage, Body } from "./SlugElements";
import BlockContent from "@sanity/block-content-to-react";

export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "zvusid2u",
      dataset: "production",
    });
    setImageUrl(imgBuilder.image(image));
  }, [image]);
  return (
    <div>
      <Main>
        <h1>{title}</h1>
        {imageUrl && <MainImage src={imageUrl} />}
        <Body>
          <BlockContent blocks={body} />
        </Body>
      </Main>
    </div>
  );
};

export default Post;

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  if (!slug) {
    return { notFound: true };
  }
  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${slug}"]`
  );
  const url = `https://zvusid2u.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return { notFound: true };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

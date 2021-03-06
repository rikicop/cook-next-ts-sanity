import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Toolbar from "../../components/Toolbar";
import { useForm, SubmitHandler } from "react-hook-form";
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

const Rule = styled.hr`
  margin: 5px auto;
  border: 1px solid var(--primary-color);
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 2px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Span = styled.span`
  color: #585858;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 2px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px #719ece;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 20px;
  margin: 8px 0;
  border: 2px solid lightgray;
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px #719ece;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: red;
  font-weight: bold;
`;

const Submit = styled.button`
  background-color: var(--primary-color);
  font-size: medium;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #719ece;
  }
`;

const CommentConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid blue;
  background-color: blue;
  color: white;
  h3 {
    font-size: medium;
    font-weight: bold;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 3px 3px 2px -2px var(--primary-color);
  color: black;
  h3 {
    font-size: medium;
    font-weight: bold;
  }
  hr {
    margin: 5px auto;
    border: 2px solid lightgray;
  }
  p {
    span {
      color: var(--primary-color);
      text-transform: capitalize;
      margin-right: 5px;
    }
  }
`;

interface IFormInput {
  _id: string;
  name: string;
  email?: string;
  comment: string;
}

interface Props {
  post: PostType;
}

function Post({ post }: Props) {
  const [imageUrl, setImageUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  console.log("POST: ", post);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        fetch("/api/createComment", {
          method: "POST",
          body: JSON.stringify(data),
        })
          .then(() => {
            console.log(data);
            setSubmitted(true);
          })
          .catch((err) => {
            console.log(err);
            setSubmitted(false);
          });
        resolve();
      }, 1700);
    });
  };

  useEffect(() => {
    const imgBuilder: any = imageUrlBuilder({
      projectId: "zvusid2u",
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
        <Rule />
        {isSubmitting && <h1>Cargando...</h1>}
        {submitted ? (
          <CommentConfirmed>
            <h2>Gracias por tu comentario!</h2>
            <p>Ya se envi?? al administrador</p>
          </CommentConfirmed>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ color: "blue" }}>Te gust?? este art??culo?</h3>
            <h4 style={{ color: "gray", marginTop: "2px" }}>
              Deja un comentario!
            </h4>
            <hr style={{ padding: "3px auto", margin: "8px 8px" }} />
            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <Label>
              <Span>Nombre</Span>
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Pedro Villamizar"
              />
            </Label>
            <Label>
              <Span>Email</Span>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="pedro@mail.com"
              />
            </Label>
            <Label>
              <Span>Comentarios</Span>
              <Textarea
                {...register("comment", { required: true })}
                placeholder="Escribe tu comentario"
                rows={8}
              />
            </Label>
            {/* errors will return whe field validation fails */}
            <ErrorContainer>
              {errors.name && (
                <span className="text-red-500">
                  El Campo Nombre es requerido
                </span>
              )}
              {errors.email && (
                <span className="text-red-500">
                  El Campo Email es requerido
                </span>
              )}
              {errors.comment && (
                <span className="text-red-500">
                  El Campo Comentario es requerido
                </span>
              )}
            </ErrorContainer>
            <Submit type="submit"> Ingresar </Submit>
          </Form>
        )}
        {/* Comments */}
        <CommentContainer>
          <h3>Comentarios</h3>
          <hr style={{ width: "90%" }} />
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p style={{ margin: "1rem auto" }}>
                <span>{comment.name}:</span>
                {comment.comment}
              </p>
            </div>
          ))}
        </CommentContainer>
      </Main>
    </div>
  );
}

export default Post;

export const getServerSideProps = async (ctx: any) => {
  const { slug } = ctx.query;
  if (!slug) {
    return { notFound: true };
  }
  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${slug}"]{
        _id,
        _createdAt,
        title,
        video,
        author -> {
            name,
            image
        },
        'comments': *[_type == "comment" && 
         post._ref == ^._id &&
         approved == true],
        description,
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

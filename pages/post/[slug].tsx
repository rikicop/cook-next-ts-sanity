import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import {
  Main,
  MainImage,
  Body,
  Rule,
  Form,
  Label,
  Span,
  Input,
  Textarea,
  ErrorContainer,
  Submit,
  CommentConfirmed,
  CommentContainer,
  Title,
} from "./SlugElements";
import BlockContent from "@sanity/block-content-to-react";
import Toolbar from "../../components/Toolbar";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostType } from "../../typings";

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
            <p>Ya se envió al administrador</p>
          </CommentConfirmed>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ color: "blue" }}>Te gustó este artículo?</h3>
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

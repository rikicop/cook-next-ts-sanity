import { ArticleItemProps } from "../../Interfaces";
import { useRouter } from "next/router";
import { CardContainer } from "./CardItemElements";

const CardItem = ({ data }: ArticleItemProps) => {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/post/${data.slug.current}`)}>
      <div className="card-head">
        <div className="image-wrapper">
          <img src={data.mainImage} alt="post" />
        </div>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-excerpt">{data.excerpt}</p>
      </div>
      {/* In case you need to add authors... */}
      {/*  <div className="info-author">
        <p className="name-author">{data.author}</p>
        <img className="img-author" src={data.authorPicture} alt="author" />
      </div> */}
      <div className="btn-wrapper">
        <button className="btn-read">Leer más</button>
      </div>
    </CardContainer>
  );
};

export default CardItem;

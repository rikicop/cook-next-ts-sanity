import { IndexPageProps } from "../Interfaces";
//import styles from "../styles/Card.module.css";
import CardItem from "../components/CardItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 30rem));
    padding: 1rem;
  }
`;

const Title = styled.h1`
  margin-top: 7rem;
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  align-self: center;
  text-align: center;
`;

const CardList = ({ data, title }: IndexPageProps) => {
  return (
    <section id="blog">
      <Title>{title}</Title>
      <Wrapper>
        {data.map((article, index) => (
          <CardItem data={article} key={index} />
        ))}
      </Wrapper>
    </section>
  );
};

export default CardList;

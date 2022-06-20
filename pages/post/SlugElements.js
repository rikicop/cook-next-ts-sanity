import styled from "styled-components";

export const Main = styled.div`
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
export const Title = styled.h1`
  font-size: 2rem;
  padding-bottom: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 3rem;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const Body = styled.div`
  p {
    font-size: 24px;
    text-indent: 50px;
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

export const Rule = styled.hr`
  margin: 5px auto;
  border: 1px solid var(--primary-color);
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 2px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Span = styled.span`
  color: #585858;
  font-weight: bold;
`;

export const Input = styled.input`
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

export const Textarea = styled.textarea`
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

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: red;
  font-weight: bold;
`;

export const Submit = styled.button`
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

export const CommentConfirmed = styled.div`
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

export const CommentContainer = styled.div`
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

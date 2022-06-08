import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.03);
  }
  &:hover .btn-wrapper .btn-read {
    background: #0467fb;
    color: #fff;
  }

  .card-head {
    .image-wrapper {
      img {
        filter: brightness(95%);
      }
    }
    .card-title {
      margin: 1rem;
    }
    .card-excerpt {
      padding: 0 1rem;
    }
  }
  /* In Case you need Authors */
  /* 
  .info-author {
    margin-top: 10px;
    border-top: #3e3c3c solid 1px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name-author {
      font-size: 1.2rem;
      font-weight: bold;
      color: #3e3c3c;
    }
    .img-author {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  } */
  .btn-wrapper {
    margin-top: 10px;
    /* border-top: #3e3c3c solid 1px; */
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    text-align: center;
    .btn-read {
      padding: 1rem;
      font-family: inherit;
      font-weight: bold;
      font-size: 1rem;
      margin: 1rem;
      border: 2px solid #2436f9;
      background: transparent;
      color: #4b59f7;
      border-radius: 1rem;
      transition: background 200ms ease-in, color 200ms ease-in;
    }
  }
`;

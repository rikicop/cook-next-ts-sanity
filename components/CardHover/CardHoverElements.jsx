import styled from "styled-components";

export const ImgBox = styled.div`
  position: absolute;
  left: 50%;
  top: -80px;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
`;

export const CardContainer = styled.div`
  position: relative;
  /* overflow: hidden; Este me estaba cortando la imagen */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;
  border: solid #ccc;
  border-width: 3px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 20px lightgray;
  transition: 1s;

  &:hover {
    /*height: min-content; transition no acepta min-content...*/
    height: 360px;
    /* Var.Ef.1  
     .imgBx {
      transform: scale(1);
    } */
    .content .details {
      padding: 38px;
    }
    .content .details .iconos {
      display: none;
    }
    .content .details h2 {
      display: none;
    }
    .content .details .data {
      margin-top: 100px;
      visibility: visible;
    }
    .content .details .data .pasos {
      margin-bottom: 25px;
    }
  }

  .imgBx {
    position: absolute;
    left: 50%;
    top: -80px;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    /* Var.Ef.1  transition: 0.5s;  */
  }

  /* CONTENT */

  .content {
    position: absolute;
    margin-top: 55px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
  }

  .content .details {
    padding: 34px;
    text-align: center;
    width: 100%;
    transition: 0.5s;
    transform: translateY(160px);
  }

  &:hover .content .details {
    transform: translateY(10px);
  }

  .content .details h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #555;
    line-height: 1.2rem;
  }

  .content .details h2 span {
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.5;
  }

  .content .details .data {
    display: block;
    justify-content: space-between;
    margin: 20px 0;
    visibility: hidden;
  }

  .content .details .data h3 {
    font-size: 1em;
    color: #555;
    line-height: 1.2em;
    font-weight: 600;
  }

  .content .details .data h3 span {
    font-size: 0.85em;
    font-weight: 400;
    opacity: 0.5;
  }

  .content .details .iconos {
    display: flex;
    justify-content: space-between;
    margin: 12px -32px;
    /* -32px por que habias colocado 40px
      en  details
    .content .details {
      padding: 40px;
    } */
  }

  .content .details .iconos .left {
    display: inline-flex;
  }

  .content .details .iconos .left h2 {
    margin-left: 5px;
  }
`;

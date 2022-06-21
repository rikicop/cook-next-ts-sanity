import React from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function WhatsAppButton() {
  return (
    <Div>
      <a href="https://wa.me/57311555555">
        <AiOutlineWhatsApp color="white" size={40} />
      </a>
    </Div>
  );
}

const Div = styled.div`
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: #12cb12;
    padding: 0.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: black;
      font-size: 1rem;
    }
  }
`;

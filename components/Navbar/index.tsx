import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/heroProfile.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

const Nav = styled.nav`
  height: 14vh;
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 1rem 1rem;
  .brand {
    display: flex;
    align-items: center;
    .logo {
      border: 2px solid lightgray;
      border-radius: 500px;
    }
    .toggle {
      display: none;
    }
  }
  /* .links es un DIV */
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    margin-right: 10px;

    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      a:first-child {
        background-color: var(--primary-color);
        color: white;
        border-radius: 0.3rem;
      }
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        font-weight: bold;
        &:hover {
          background-color: var(--primary-color);
          color: white;
          border-radius: 0.3rem;
        }
      }
    }

    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: #666;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 13vh;
    position: relative;
    margin: 0;
    z-index: 1;
    .brand {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    /* El Div de Links  */
    .links {
      position: absolute;
      background-color: #fff;
      flex-direction: column;
      margin-top: 4rem;
      width: 100vw;
      padding: 1rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;

const Navbar = () => {
  const [navState, setNavState] = useState<boolean>(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <Image
            src={logo}
            alt="Brand Logo"
            className="brandLogo"
            height={50}
            width={60}
          />
        </div>
        <h3 style={{ marginLeft: "10px" }}>Dr. Leonardo Luna</h3>
        <div className="toggle">
          {navState ? (
            <BsToggleOn
              onClick={() => setNavState(false)}
              color="var(--primary-color)"
            />
          ) : (
            <BsToggleOff
              onClick={() => setNavState(true)}
              color=" var(--primary-color)"
            />
          )}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          <LinkScroll
            to="hero"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Principal</li>
          </LinkScroll>
          <LinkScroll
            to="blog"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Blog</li>
          </LinkScroll>

          <LinkScroll
            to="servicios"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Servicios</li>
          </LinkScroll>

          <LinkScroll
            to="footr"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            <li>Contacto</li>
          </LinkScroll>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;

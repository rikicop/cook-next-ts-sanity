import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/heroProfile.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 1rem 1rem;
  .brand {
    display: flex;
    align-items: center;
    cursor: pointer;
    .logo {
      img {
        height: 5vh;
      }
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 43%;
    cursor: pointer;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      list-style: none;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          a {
            color: #ffffff;
          }
        }
        a {
          text-decoration: none;
          color: #202020;
          font-weight: bold;
          transition: 0.3s ease-in-out;
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
      margin-top: 1rem;
      width: 100vw;
      padding: 5rem 0;
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
  const router = useRouter();

  const [navState, setNavState] = useState<boolean>(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo" onClick={() => router.push(`/`)}>
          <Image
            src={logo}
            alt="Brand Logo"
            className="brandLogo"
            height={50}
            width={100}
          />
        </div>
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
          <li>
            <Link href="https://www.instagram.com/">
              <li>
                <FaInstagram
                  size={35}
                  color="var(--primary-color)"
                  style={{ marginRight: "10px" }}
                />
                Instagram
              </li>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com">
              <li>
                <FaFacebook
                  size={35}
                  color="var(--primary-color)"
                  style={{ marginRight: "10px" }}
                />
                Facebook
              </li>
            </Link>
          </li>
          <li>
            <Link href="https://www.twitter.com/">
              <li>
                <FaTwitter
                  size={35}
                  color="var(--primary-color)"
                  style={{ marginRight: "10px" }}
                />
                Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;

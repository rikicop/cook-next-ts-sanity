//import Image from "next/image";
//import React from "react";
//import { Typewriter } from "react-simple-typewriter";
//import { Section } from "./HeroElements";
import { useRouter } from "next/router";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

import {
  Container,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Button,
  Social,
} from "./AcercaElements";

interface HeroProps {
  primary?: boolean;
  lightBg?: boolean;
  topLine?: string;
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  headline?: string;
  description?: string;
  buttonLabel?: string;
  img?: any;
  alt?: string;
  imgStart?: any;
  start?: any;
}

function Acerca({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}: HeroProps) {
  const router = useRouter();
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <Button
                  big
                  fontBig
                  primary={primary}
                  onClick={() =>
                    router.push(
                      "https://u.pcloud.link/publink/show?code=XZFTMRVZbxSEfFJ0f5jqKjwlLmS0yzScj6aV"
                    )
                  }
                >
                  {buttonLabel}
                </Button>
                <Social>
                  <ul>
                    <Link href="https://www.facebook.com/">
                      <li>
                        <FaFacebook style={{ marginRight: "10px" }} />
                      </li>
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <li>
                        <FaTwitter style={{ marginRight: "10px" }} />
                      </li>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <li>
                        <FaInstagram style={{ marginRight: "10px" }} />
                      </li>
                    </Link>
                  </ul>
                </Social>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Acerca;

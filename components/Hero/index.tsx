//import Image from "next/image";
//import React from "react";
//import { Typewriter } from "react-simple-typewriter";
//import { Section } from "./HeroElements";
import { useRouter } from "next/router";

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
} from "./HeroElements";

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

function Hero({
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

export default Hero;

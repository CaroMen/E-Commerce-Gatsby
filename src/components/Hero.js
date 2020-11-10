import React, { useState } from 'react';
import headerImg from '../images/header.png';
import { Container } from '../globalstyles';
import { Header, FirstRow, TextWrapper, Heading, Subtitle, ImgWrapper, Img, HeaderColumn, HeaderColumnType, HeaderColumnIntro, GoIcon, StoreLink } from '../elements/Hero.elements';

export const Hero = ({ darkText, start, }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <Header>
                <Container>
                    <FirstRow>
                        <HeaderColumn>
                            <ImgWrapper start={start}>
                                <Img src={headerImg} alt="Image" />
                            </ImgWrapper>
                        </HeaderColumn>
                        <HeaderColumnType>
                            <HeaderColumnIntro>
                                <TextWrapper>
                                    <Heading darkText={darkText}>Make Your Home Unique</Heading>
                                    <Subtitle darkText={darkText}>From contemporary to modern styles, create your own vision.</Subtitle>
                                </TextWrapper>
                            </HeaderColumnIntro>
                        </HeaderColumnType>
                    </FirstRow>
                </Container>
            </Header>
        </>
    )
}

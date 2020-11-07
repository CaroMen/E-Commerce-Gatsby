import React from 'react';
import { Container } from '../globalstyles';
import vincent from '../images/vincent.png'
import blob from '../images/blob.svg'
import { StoreSec, StoreTextWrapper, FirstRowStore, ImgWrapperStore, HeadLine, StoreIntroSec, SubtitleCat, StoreNewSec, Img, IntroDesc, StoreTextWrapperDesc, IntroHeadLine, ColumnDesc, FirstCol, SecCol, ThirdCol, PriceIcon, DescTitle, Desc, DescCol, ModernIcon, ServiceIcon, ImgBack } from '../elements/StoreSection.elements';

export const StoreSection = ({ intro, darkText, cat1, start, img2, alt, cat2, cat3, intro2, cat4, pricedesc, pricepara, img3 }) => {
    return (
        <>
            <StoreSec>
                <FirstRowStore>
                    <Container>
                        <StoreIntroSec>
                            <StoreTextWrapper>
                                <HeadLine darkText={darkText}>NEW ARRIVAL</HeadLine>
                            </StoreTextWrapper>
                        </StoreIntroSec>
                        <StoreNewSec>
                            <ImgWrapperStore start={start}>
                                <Img src={vincent} alt={alt} />
                                <SubtitleCat darkText={darkText}>VINCENT</SubtitleCat>
                            </ImgWrapperStore>
                            <StoreTextWrapperDesc>
                                <ImgBack src={blob} />
                                <IntroHeadLine darkText={darkText}>MODERN BY FRANCIS</IntroHeadLine>
                                <IntroDesc darkText={darkText}>Inspired by contemporary architecture, our furniture is a modern take on interior design. Our designs are a blend of comfortable, liveable elements that give your home a sophisticated look to any room.</IntroDesc>
                                <IntroDesc darkText={darkText}>Our job is to help you make your vision become a reality. Give your home a sleek and fresh look with our furniture. With a comfortable yet bold and simple take on life, find the joy that is found in a beautifully decorated, contemporary and modern home.</IntroDesc>
                            </StoreTextWrapperDesc>
                        </StoreNewSec>
                        <ColumnDesc>
                            <FirstCol>
                                <PriceIcon />
                                <DescCol>
                                    <DescTitle darkText={darkText}>Great Prices</DescTitle>
                                    <Desc darkText={darkText}>We offer some of the best prices you will find during your search for new furniture. We help you stay within your budget and offer a wide variety of options that will fall in your range.</Desc>
                                </DescCol>
                            </FirstCol>
                            <SecCol>
                                <ModernIcon />
                                <DescCol>
                                    <DescTitle darkText={darkText}>Modern Furniture</DescTitle>
                                    <Desc darkText={darkText}>We offer unique, modern, and contemporary furniture. We look to the future for our designs and create furniture that won't stand all the way out in your home, but will be modern and unique.</Desc>
                                </DescCol>
                            </SecCol>
                            <ThirdCol>
                                <ServiceIcon />
                                <DescCol>
                                    <DescTitle darkText={darkText}>Customer Service</DescTitle>
                                    <Desc darkText={darkText}>During your entire shopping experience, we offer great customer service to make a special time in your life a lot easier. Our employees can answer all of your questions and accomodate any need you may have.</Desc>
                                </DescCol>
                            </ThirdCol>
                        </ColumnDesc>
                    </Container>
                </FirstRowStore>
            </StoreSec>
        </>
    )
}

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

export const Header = styled.div`
color: black;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`;

export const FirstRow = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const TextWrapper = styled.div`
/* max-width: 450px; */
padding-top: -20px;
padding-bottom: 60px;
display: block;
margin: auto;
z-index: 1;
max-width: 50%;
text-align: center;

`;

export const Heading = styled.h1`
margin-bottom: 10px;
font-size: 64px;
line-height: 1.2;
display: flex;
justify-content: center;
text-align: center;
`;

export const Subtitle = styled.p`
margin-top: 10px;
font-size: 25px;
line-height: 1.1;
padding-top: -10px;
text-align: center;

`;

export const HeaderColumn = styled.div`
padding-right: 15px;
padding-left: 15px;
width: 100%;
height: 100%;
z-index: 1;
/* flex-basis: 50%; */

`;

export const ImgWrapper = styled.div`
position: absolute;
left: 0;
right:0;
width: 100%;
height: 100%;
z-index: -1;

`;

export const Img = styled.img`
padding: 0;
display: block;
margin: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;

@media screen and (max-width: 768px) {
    margin-top: 105px;
    margin-bottom: -130px;
}
`;

export const HeaderColumnType = styled.div`
margin-top: -160px;
width: 100%;
z-index: 1;
display: flex;
justify-content: center;
flex-basis: 90%;
`;

export const HeaderColumnIntro = styled.div`
margin-top: -650px;
max-width: 100%;
flex-basis: 50%;
z-index: 1;
display: flex;
justify-content: center;
`;

export const StoreLink = styled(Link)`
color: #1F1F1E;
text-decoration: none;
padding-top: -40px;
display: flex;
justify-content: flex-end;
margin-right: 40px;
`;

export const GoIcon = styled(AiOutlineArrowRight)`
margin-left: 0.5rem;
padding-top: -20px;
display: inline-block;
`;

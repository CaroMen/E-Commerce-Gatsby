import styled from 'styled-components';
import { ImPriceTags } from "react-icons/im";
import { BiBed } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";

export const StoreSec = styled.div`
color: black;
padding: 160px 0;
background-color: white;
`;

export const FirstRowStore = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
width: 100%;
height: 100%;
`;

export const StoreTextWrapper = styled.div`
max-width: 450px;
padding-top: 240px;
padding-bottom: 60px;
`;

export const ImgWrapperStore = styled.div`
margin-top: -80px;
/* margin-left: 200px; */
width: 100%;
height: 100%;
`

export const StoreTextWrapperDesc = styled.div`
margin-top: -80px;
margin-left: 200px;
width: 100%;
height: 130%;
`;

export const IntroDesc = styled.p`
margin-top: 10px;
font-size: 25px;
line-height: 1.5;
margin-bottom: 20px;
`

export const StoreNewSec = styled.div`
max-width: 40%;
position: relative;
text-align: right;
display: grid;
grid-template-columns: 100% 100%;
width: 100%;
flex: 1;
`

export const HeadLine = styled.h3`
margin-bottom: 24px;
padding-top: 150px;
font-size: 44px;
line-height: 1.2;
`;

export const IntroHeadLine = styled.h3`
margin-bottom: 24px;
padding-top: 150px;
font-size: 44px;
line-height: 1.2;
`;

export const StoreIntroSec = styled.div`
padding-right: 15px;
padding-left: 15px;
margin-top: -450px;
max-width: 33%;
display: flex;
`;

export const ColumnDesc = styled.div`
margin-top: 30px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height: 100%;
width: 100%;
margin-left: 0;
margin-right: 0;
`

export const DescCol = styled.div`
width: 100%;
height: 100%;
`;

export const FirstCol = styled.p`
display: grid;
margin-top: 100px;
max-width: 80%;
max-height: 70%;
grid-template-rows: 1fr 1fr;
margin-left: auto;
margin-right: auto;
padding: 50px 50px 50px 50px;
background-color: #333847;
color: white;
border-radius: 15px;
box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.15),
            5px 4px 3px 0px rgba(88, 88, 88, 0.15);
transition: 0.5s ease;
cursor: pointer;

    &:hover {
        transform: scale(1.1);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
`

export const DescTitle = styled.h4`
margin-top: -65px;
font-size: 30px;
line-height: 1.2;
`

export const Desc = styled.p`
font-size: 20px;
line-height: 1.5;
`

export const PriceIcon = styled(ImPriceTags)`
margin-right: 0.5rem;
width: 40px;
height: 40px;
`

export const ModernIcon = styled(BiBed)`
margin-right: 0.5rem;
width: 40px;
height: 40px;
`

export const ServiceIcon = styled(BsFillChatFill)`
margin-right: 0.5rem;
width: 40px;
height: 40px;
`

export const SecCol = styled.p`
display: grid;
margin-top: 100px;
max-width: 80%;
max-height: 70%;
grid-template-rows: 1fr 1fr;
margin-left: auto;
margin-right: auto;
padding: 50px 50px 50px 50px;
background-color: #333847;
color: white;
border-radius: 15px;
box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.15),
            5px 4px 3px 0px rgba(88, 88, 88, 0.15);

transition: 0.5s ease;
cursor: pointer;

    &:hover {
        transform: scale(1.1);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
`

export const ThirdCol = styled.p`
display: grid;
margin-top: 100px;
max-width: 80%;
max-height: 70%;
grid-template-rows: 1fr 1fr;
margin-left: auto;
margin-right: auto;
padding: 50px 50px 50px 50px;
background-color: #333847;
color: white;
border-radius: 15px;
box-shadow: -5px -4px 3px 0px rgba(255, 255, 255, 0.15),
            5px 4px 3px 0px rgba(88, 88, 88, 0.15);
transition: 0.5s ease;
cursor: pointer;

    &:hover {
        transform: scale(1.1);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
`

export const SubtitleCat = styled.p`
margin-top: 10px;
font-size: 25px;
line-height: 1.1;
padding-left: -15px;
`;


export const Img = styled.img`
padding: 0;
margin: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
`;

export const ImgBack = styled.img`
/* background-color: #333847; */
width: 150%;
height: 150%;
position: absolute;
z-index: -1;
margin-top: -120px;
margin-left: -600px;
/* padding-top: -400px; */
`

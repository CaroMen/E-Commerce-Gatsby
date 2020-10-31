import React from 'react'
import deskImg from '../images/desk.png';
import couchImg from '../images/couch.png';
import roomOneImg from '../images/roomone.png';
import bedImg from '../images/bed.png';
import roomTwoImg from '../images/roomtwo.png';
import diningImg from '../images/dining.png';
import { OptionsDiv, Pictures, ImgOne, ImgTwo, ImgThree, PicturesTwo, ImgFour, ImgFive, ImgSix } from '../elements/Options.elements'

export const Options = ({ deskimg, alt, couchimg, bedimg, roomoneimg, roomtwoimg, diningimg }) => {
    return (
        <>
            <OptionsDiv>
                <Pictures>
                    <ImgOne src={deskImg} alt={alt} />
                    <ImgTwo src={couchImg} alt={alt} />
                    <ImgThree src={roomOneImg} alt={alt} />
                </Pictures>
                <PicturesTwo>
                    <ImgFour src={bedImg} alt={alt} />
                    <ImgFive src={roomTwoImg} alt={alt} />
                    <ImgSix src={diningImg} alt={alt} />
                </PicturesTwo>
            </OptionsDiv>
        </>
    )
}

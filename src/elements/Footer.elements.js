import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
background-color: #1A1C23;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #fff;
`

export const FooterSubHeading = styled.p`
/* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, Helvetica, sans-serif; */
margin-bottom: 24px;
font-size: 24px;
`

export const FooterSubText = styled.p`
margin-bottom: 24px;
font-size: 20px;
`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
`

export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;
`

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 100%;
display: flex;
justify-content: center;
`

export const FooterLinksWrapper = styled.div`
display: flex;
`

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;
`

export const FooterLinkTitle = styled.h2`
margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
`

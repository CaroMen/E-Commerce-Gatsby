import React from 'react';
import { Button } from '../globalstyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from '../elements/Footer.elements'

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive latest deals!
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscribe at any time.
                    </FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How we work</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>Order Status</FooterLink>
                            <FooterLink to='/'>Shipping Information</FooterLink>
                            <FooterLink to='/'>Delivery and Store Pickup</FooterLink>
                            <FooterLink to='/'>Return and Exchange Promise</FooterLink>
                            <FooterLink to='/'>Price Match Guarantee</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Partnerships</FooterLinkTitle>
                            <FooterLink to='/'>Affiliate Program</FooterLink>
                            <FooterLink to='/'>Developers</FooterLink>
                            <FooterLink to='/'>Advertise with Us</FooterLink>
                            <FooterLink to='/'>Luxury for Business</FooterLink>
                            <FooterLink to='/'>Refer and Earn</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Policies</FooterLinkTitle>
                            <FooterLink to='/'>Warranty</FooterLink>
                            <FooterLink to='/'>Shipping Policy</FooterLink>
                            <FooterLink to='/'>Return Policy</FooterLink>
                            <FooterLink to='/'>Terms and Conditions</FooterLink>
                            <FooterLink to='/'>Privacy Policy</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterContainer>
        </>
    )
}

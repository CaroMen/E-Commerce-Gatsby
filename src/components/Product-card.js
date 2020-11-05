// @jsx jsx
import { jsx } from 'theme-ui'
import React from 'react';
import Image from 'gatsby-image';
import Client from 'shopify-buy'
import { navigate } from '@reach/router';

const client = Client.buildClient({
    storefrontAccessToken: "e7fd1b5eef627c5aeac4ee7be2bc6801",
    domain: 'https://modernbyfrancis.myshopify.com/'
})

async function buyFurniture(shopifyId) {
    console.log(shopifyId);
    const checkout = await client.checkout.create();
    await client.checkout.addLineItems(checkout.id, [
        {
            variantId: shopifyId,
            quantity: 1
        }
    ]);
    console.log(checkout.webUrl);
    navigate(checkout.webUrl);
}

console.log(client.checkout);

const BuyButton = ({ variants }) => {
    const price = variants[0].price;

    return <button sx={{
        position: 'absolute',
        width: '100%',
        color: 'white',
        background: 'black',
        borderRadius: '8px',
        border: 'none',
        padding: '13px',
        margin: 'auto',
        '&:hover': { bg: '#454C5F', boxShadow: '1px 1px 2px rgba(#fff, .2)', textDecoration: 'none', transition: 'all 250ms linear' }
    }} >
        {variants.length > 1 ? `Buy for ${`$` + price}` : `Buy for ${`$` + price}`}
    </button>
};

export const ProductCard = ({ product }) => {

    return (
        <div sx={{
            position: 'relative', background: 'white', border: '5px solid white', borderRadius: '15px', mb: '1rem'
        }}>
            <Image sx={{
                maxWidth: '100%'
            }} fluid={product.variants[0].image.localFile.childImageSharp.fluid} alt={product.title} />
            <p sx={{ textAlign: 'center', fontSize: '20px', mt: '.2rem' }}>{product.productType}</p>
            <h2 sx={{ mt: '.5rem', fontSize: '40px', textAlign: 'center' }}>{product.title}</h2>
            <p sx={{ textAlign: 'center', fontSize: '25px', mt: '.2rem' }}>{product.description}</p>
            <p sx={{ textAlign: 'center', fontSize: '25px', mt: '.2rem' }}>{product.price}</p>
            {variants.map((variant, i) => (
                <BuyButton onClick={() => buyFurniture(variant.shopifyId)} />)
            )}
        </div >
    )
}

export default ProductCard;

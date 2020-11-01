// @jsx jsx
import { jsx } from 'theme-ui'
import Image from 'gatsby-image';

const BuyButton = ({ variants }) => {
    const price = variants[0].price;
    // const formatted = new Intl.NumberFormat('en-US', price.currencyCode, { style: currency, currency: price.currencyCode }).format(price.amount);

    return <button sx={{ position: 'absolute', width: '100%', color: 'white', background: 'black', borderRadius: '8px', border: 'none', padding: '13px', margin: 'auto', '&:hover': { bg: '#454C5F', boxShadow: '1px 1px 2px rgba(#fff, .2)', textDecoration: 'none', transition: 'all 250ms linear' } }}>{variants.length > 1 ? `Buy for ${`$` + price}` : `Buy for ${`$` + price}`} </button>
    // if (variants.length > 1) {
    //     return <button>Buy for {variants[0].price}</button>
    // }
}

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
            <BuyButton variants={product.variants} />
        </div >
    )
}

export default ProductCard;

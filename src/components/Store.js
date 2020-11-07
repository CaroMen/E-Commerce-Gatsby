// @jsx jsx
import { jsx } from 'theme-ui'
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ProductCard, BuyButton } from '../components/Product-card';

export const Store = () => {
    return (
        <StaticQuery
            query={graphql`
                { allShopifyProduct {
                    nodes {
                        title
                        description
                        productType
                        variants {
                            image {
                                localFile {
                                    childImageSharp {
                                        fluid(maxHeight: 1600, maxWidth: 900, cropFocus: CENTER, fit: COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                            # srcSet
                                        }
                                    }
                                }
                            }
                            price
                            id
                            shopifyId
                        }
                        shopifyId
                    }
                }
            }
        `}

            render={data => (
                <>
                    <div sx={{
                        mx: 'auto', maxWidth: '80vw', display: 'grid', padding: '40px',
                        gridGap: 4,
                        gridTemplateColumns: [
                            'auto',
                            '1fr 1fr 1fr 1fr'
                        ], background: 'white'
                    }}>
                        {data.allShopifyProduct.nodes.map(product => (
                            <div>
                                <ProductCard key={product.id} product={product} />

                            </div>
                        ))}
                    </div>
                </>
            )}
        />
    )
};

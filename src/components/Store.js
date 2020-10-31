import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

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
                            price
                            image {
                                localFile {
                                    childImageSharp {
                                        fixed(height: 200, width: 100, cropFocus: ATTENTION, fit: COVER) {
                                            ...GatsbyImageSharpFixed_withWebp
                                        }
                                    }
                                }
                            }
                        }

                        }
                    }
                }
            `}

            render={data => (
                <>
                    {data.allShopifyProduct.nodes.map(product => (
                        <div>
                            <Product key={product.id} product={product} />

                        </div>
                    ))}
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </>
            )}
        />
    )
};

export const Product = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.productType}</p>
            <p>{product.description}</p>
            <Image fixed={product.variants[0].image.localFile.childImageSharp.fixed} alt={product.title} />
        </div>
    )
}

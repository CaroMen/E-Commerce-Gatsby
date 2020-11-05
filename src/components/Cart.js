import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import {
    useCartItems,
    useCartTotals,
    useRemoveItemFromCart,
    useCheckout
} from '../context/StoreContext';

// export const CartPage = ({ data }) => {
//     const products = data.allShopifyProduct.nodes
//     const variants = data.allShopifyProductVariant.nodes

//     const lineItems = useCartItems()
//     const { total } = useCartTotals()
//     const removeFromCart = useRemoveItemFromCart()
//     const checkout = useCheckout()

//     const betterProductHandles = products.map(({ handle, variants }) => {
//         const newVariants = variants.map((variant) => variant.shopifyId)
//         return {
//             variants: newVariants,
//             handle
//         }
//     })

//     const getHandleForVariant = (variantId) => {
//         const selectedProduct = betterProductHandles.find((product) => {
//             return product.variants.includes(variantId)
//         })

//         return selectedProduct ? selectedProduct.handle : null
//     }

//     const getImageFluidForVariant = (variantId) => {
//         const selectedVariant = variants.find((variant) => {
//             return variant.shopifyId === variantId
//         })

//         if (selectedVariant) {
//             return selectedVariant.image.localFile.childImageSharp.fluid
//         }
//         return null
//     }

//     const LineItem = ({ item }) => (
//         <div
//             style={{
//                 display: 'grid',
//                 gridGap: '10px',
//                 gridTemplateColumns: '3fr 5fr 2fr 2fr'
//             }}
//         >
//             <div style={{ border: '2px solid black', padding: '1px' }}>
//                 <Image fluid={getImageFluidForVariant(item.variant.id)} />
//             </div>
//             <div>
//                 <Link to={`/product/${getHandleForVariant(item.variant.id)}`}>
//                     {item.title}
//                 </Link>
//                 <ul style={{ listStyle: 'none' }}>
//                     {item.variant.selectedOptions.map(({ name, value }) => (
//                         <li key={name}>
//                             <strong>{name}: </strong>
//                             {value}
//                         </li>
//                     ))}
//                     <li key="quantity">
//                         <strong>Quantity: </strong>
//                         {item.quantity}
//                     </li>
//                 </ul>
//             </div>
//             <span>R{Number(item.variant.priceV2.amount).toFixed(2)}</span>
//             <button onClick={() => removeFromCart(item.id)}>Delete</button>
//         </div>
//     )

//     const emptyCart = (
//         <div>
//             <h1>Cart</h1>
//             <p>Your shopping cart is empty.</p>
//         </div>
//     )

//     return lineItems < 1 ? (
//         emptyCart
//     ) : (
//             <div>
//                 <h1>Cart</h1>
//                 {lineItems.map((item) => (
//                     <React.Fragment key={item.id}>
//                         <LineItem key={item.id} item={item} />
//                         <br />
//                     </React.Fragment>
//                 ))}
//                 <br />
//                 <h3>Total: {total}</h3>
//                 <button onClick={checkout}>Checkout</button>
//             </div>
//         )
// }
// export const query = () => {
//     return (
//         <StaticQuery
//             query={graphql`
//                     {
//                         allShopifyProductVariant {
//                             nodes {
//                                 shopifyId
//                                 image {
//                                     localFile {
//                                         childImageSharp {
//                                             fluid(maxWidth: 120) {
//                                                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                         allShopifyProduct {
//                             nodes {
//                                 handle
//                                 variants {
//                                     shopifyId
//                                 }
//                             }
//                         }
//                     }
//                 `}


//             render={data => (
//                 <>
//                     const products = data.allShopifyProduct.nodes
//                     const variants = data.allShopifyProductVariant.nodes

//                     const lineItems = useCartItems()
//                 const { total} = useCartTotals()
//                 const removeFromCart = useRemoveItemFromCart()
//                 const checkout = useCheckout()

//                 const betterProductHandles = products.map(({ handle, variants}) => {
//                     const newVariants = variants.map((variant) => variant.shopifyId)
//                     return {
//                         variants: newVariants,
//                         handle
//                     }
//                 })

//                 const getHandleForVariant = (variantId) => {
//                     const selectedProduct = betterProductHandles.find((product) => {
//                         return product.variants.includes(variantId)
//                     })

//                     return selectedProduct ? selectedProduct.handle : null
//                 }

//                 const getImageFluidForVariant = (variantId) => {
//                     const selectedVariant = variants.find((variant) => {
//                         return variant.shopifyId === variantId
//                     })

//                     if (selectedVariant) {
//                         return selectedVariant.image.localFile.childImageSharp.fluid
//                     }
//                     return null
//                 }

//                 const LineItem = ({ item}) => (
//                     <div
//                         style={{
//                             display: 'grid',
//                             gridGap: '10px',
//                             gridTemplateColumns: '3fr 5fr 2fr 2fr'
//                         }}
//                     >
//                         <div style={{ border: '2px solid black', padding: '1px' }}>
//                             <Image fluid={getImageFluidForVariant(item.variant.id)} />
//                         </div>
//                         <div>
//                             <Link to={`/product/${getHandleForVariant(item.variant.id)}`}>
//                                 {item.title}
//                             </Link>
//                             <ul style={{ listStyle: 'none' }}>
//                                 {item.variant.selectedOptions.map(({ name, value }) => (
//                                     <li key={name}>
//                                         <strong>{name}: </strong>
//                                         {value}
//                                     </li>
//                                 ))}
//                                 <li key="quantity">
//                                     <strong>Quantity: </strong>
//                                     {item.quantity}
//                                 </li>
//                             </ul>
//                         </div>
//                         <span>R{Number(item.variant.priceV2.amount).toFixed(2)}</span>
//                         <button onClick={() => removeFromCart(item.id)}>Delete</button>
//                     </div>
//                 )

//                 const emptyCart = (
//                     <div>
//                         <h1>Cart</h1>
//                         <p>Your shopping cart is empty.</p>
//                     </div>
//                 )

//                 return lineItems < 1 ? (
//                     emptyCart
//                 ) : (
//                     <div>
//                         <h1>Cart</h1>
//                         {lineItems.map((item) => (
//                             <React.Fragment key={item.id}>
//                                 <LineItem key={item.id} item={item} />
//                                 <br />
//                             </React.Fragment>
//                         ))}
//                         <br />
//                         <h3>Total: {total}</h3>
//                         <button onClick={checkout}>Checkout</button>
//                     </div>
//                     )
//             }
//                 </>
//             )}
//         />
//     )
// };

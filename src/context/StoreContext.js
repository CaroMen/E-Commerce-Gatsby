import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: process.env.SHOP_TOKEN,
    domain: `modernbyfrancis.myshopify.com`
})

class ShopProvider extends Component {

    state = {
        product: {},
        checkout: {},
        test: 'test'
    }



    render() {
        return (
            <ShopContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopContext, ShopConsumer }

export default ShopProvider

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from "../globalstyles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartPage } from "../components/Cart";


const CartIndex = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar></Navbar>
            <Footer />
        </Router>

    )
}

export default CartIndex;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from "../globalstyles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { StoreSection } from "../components/StoreSection";
import { Options } from "../components/Options";
import { ShopProvider } from "../context/StoreContext";

const IndexPage = () => {
    return (
        <ShopProvider>
            <Router>
                <GlobalStyle />
                <Navbar></Navbar>
                <Switch>
                    <Route path="/store" />
                    <Route path="/cart" />
                </Switch>
                <Hero />
                <StoreSection />
                <Options />
                <Footer />
            </Router>
        </ShopProvider>

    )
}

export default IndexPage;

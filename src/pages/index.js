import React from "react";
import { BrowserRouter as Router, Switch, Route } from '@reach/router';
import { GlobalStyle } from "../globalstyles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { StoreSection } from "../components/StoreSection";
import { Options } from "../components/Options";

const IndexPage = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar></Navbar>
            <Switch>
                <Route path="/store" />
            </Switch>
            <Hero />
            <StoreSection />
            <Options />
            <Footer />
        </Router>

    )
}

export default IndexPage;

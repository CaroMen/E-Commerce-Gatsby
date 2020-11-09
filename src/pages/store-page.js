import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from "../globalstyles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Store } from "../components/Store";


const IndexPage = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar></Navbar>
            <Store />
            <Footer />
        </Router>

    )
}

export default IndexPage;

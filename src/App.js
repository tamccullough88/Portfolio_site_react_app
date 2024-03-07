import React from "react";
import Index from "pages/index";
import Projects from "pages/projects";
import About from "pages/about";
import Contact from "pages/contact";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/projects' component={Projects}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);

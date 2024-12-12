import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
//npm install react-router-dom

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function RouterExample() {
    return (
        <Router>
        <nav>
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </Routes>
        </Router>
    );
}

export default RouterExample;

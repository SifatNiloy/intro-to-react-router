import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Header = () => {
    return (
        <div>
            <a href="/">Home</a>
            <a href="/about"><About/></a>
            <a href="/contact"><Contact/></a>
        </div>
    );
};

export default Header;
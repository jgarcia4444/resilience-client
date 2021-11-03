import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';

import logo from '../../media/imgs/logos/sm-logo.gif';

import './index.css';

const Nav = () => {

    const renderNavItems = () => {
        const navItems = ["Home", "About", "Contact"];
        return navItems.map(item => { 
            let slug = slugify(item);
            return (
                    <Link to={`/${slug}`} className="nav-link" href="#">
                        {dynamicIcon()}
                        {item}
                    </Link>
            )
        })
    }

    const dynamicIcon = (iconName) => {
        switch(iconName) {
            default:
                return
        }
    }

    const slugify = (navLink) => {
        let lowercased = lowercaseWord(navLink);
        if (lowercased.split(" ").length > 1) {
            return lowercased.split(" ").join("-");
        }
        return lowercased
    }

    const lowercaseWord = (wordToBeLowercased) => {
        if (wordToBeLowercased.split(" ").length > 1) {
            let lowercasedWords = wordToBeLowercased.split(" ").map(word => word.toLowerCase())
            return lowercasedWords.join(" ");
        } else {
            return wordToBeLowercased.toLowerCase();
        }
    }

    return (
        <Container fluid className="nav-container">
            <div className="nav-logo-container">
                <a href="/">
                    <img src={logo} className="" />
                </a>
            </div>
            <div className="nav-links-container">
                {renderNavItems()}
            </div>
        </Container>
    )
}

export default Nav;
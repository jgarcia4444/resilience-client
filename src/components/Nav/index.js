import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';

import './index.css';

const Nav = () => {

    const renderNavItems = () => {
        const navItems = ["Home", "About", "Contact"];
        return navItems.map(item => { 
            let slug = slugify(item);
            return ( 
                <Col key={item} sm={4}>
                    <Link to={`/${slug}`} className="nav-links" href="#">{item}</Link>
                </Col>
            )
        })
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
            <Row>
                {renderNavItems()}
            </Row>
        </Container>
    )
}

export default Nav;
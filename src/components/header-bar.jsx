import * as React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {EnvelopeOpen, Facebook, Instagram} from "react-bootstrap-icons";
import logo from '../assets/images/optimal-white-logo-only.png';
import {NavLink} from "react-router-dom";
import {config} from "../config";
import {useState} from "react";

const styles = {
    logo: {
        maxHeight: 26,
        marginRight: 16
    },
    link: {
        marginTop: 12,
        marginLeft: 6,
        marginRight: 6,
        color: '#ffffff80'
    },
    activeLink: {
        color: 'white'
    }
}

export function HeaderBar(props) {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" variant="dark" sticky="top" style={{background: config.primaryColor, borderBottom: 'solid 1px white'}} expanded={expanded} onToggle={setExpanded}>
            <div className="container">
                <a href="/home"><img src={logo} style={styles.logo}/></a>
                <Navbar.Brand href="/home" style={{marginTop: 2}}>Optimal Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink onClick={() => setExpanded(false)} to="/home" style={styles.link} activeStyle={styles.activeLink}>Home</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to="/about" style={styles.link} activeStyle={styles.activeLink}>About Us</NavLink>
                        <NavDropdown style={{...styles.link, marginTop: 4}} title="Locations" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/lexington">Lexington Performance Center</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/beachhouse">Natick Beach House</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/corporate">Corporate</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/quin">The 'Quin</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)} href="/inhome">In Home</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink onClick={() => setExpanded(false)} to="/staff" style={styles.link} activeStyle={styles.activeLink}>Staff</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to="/training" style={styles.link} activeStyle={styles.activeLink}>Training</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to="/contact" style={styles.link} activeStyle={styles.activeLink}>Contact</NavLink>
                    </Nav>
                    <a href="https://www.instagram.com/optimalfitnessboston/?hl=en"><Instagram className="header-icon" size={24} style={{marginLeft: 8}}/></a>
                    <a href="https://www.facebook.com/dooitright/"><Facebook className="header-icon" size={24} style={{marginLeft: 8}} /></a>
                    <a href="mailto:optimalfitnessboston@gmail.com?Subject=Hello"><EnvelopeOpen className="header-icon" size={24} style={{marginLeft: 8}} /></a>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

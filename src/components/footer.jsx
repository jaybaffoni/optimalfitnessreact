import * as React from 'react';
import {EnvelopeOpen, Facebook, Instagram} from "react-bootstrap-icons";
import {Navbar} from "react-bootstrap";
import logo from "../assets/images/optimal-white-logo-only.png";
import {config} from "../config";

const styles = {
    grid: {
        paddingTop: 16,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr auto auto auto'
    }
}

export function Footer(props) {
    return (
        <div style={{height: 60, backgroundColor: config.primaryColor}}>
            <div className="container">
                <div style={styles.grid}>
                    <p style={{color: '#ffffff80', marginTop: 4}}>&#169;2021 Optimal Fitness Boston</p>
					<a href="/sample.docx" download>Sample Form</a>
                    <a href="https://www.instagram.com/optimalfitnessboston/?hl=en"><Instagram className="header-icon" size={24} style={{marginLeft: 8}}/></a>
                    <a href="https://www.facebook.com/optimalfitnessboston"><Facebook className="header-icon" size={24} style={{marginLeft: 8}} /></a>
                    <a href="mailto:optimalfitnessboston@gmail.com?Subject=Hello"><EnvelopeOpen className="header-icon" size={24} style={{marginLeft: 8}} /></a>
                </div>
            </div>
        </div>

    );
};

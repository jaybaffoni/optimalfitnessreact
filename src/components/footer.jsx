import * as React from 'react';
import {EnvelopeOpen, Facebook, Instagram} from "react-bootstrap-icons";
import {Navbar} from "react-bootstrap";
import logo from "../assets/images/optimal-white-logo-only.png";
import {config} from "../config";

const styles = {
    grid: {
        paddingTop: 16,
        display: 'grid',
        gridTemplateColumns: '1fr auto auto auto'
    }
}

export function Footer(props) {
    return (
        <div style={{height: 60, backgroundColor: config.primaryColor}}>
            <div className="container">
                <div style={styles.grid}>
                    {/*<p style={{color: '#ffffff80', marginTop: 4}}>&#169;2021 Optimal Fitness Boston</p>*/}
					<div>
						<a href="https://forms.gle/oaX53U4PUR3G3Fst9" style={{marginRight:6}}>Health History Form  &#8226;</a>
						<a href="https://forms.gle/LvE1t9sRHv73c15w6">Waiver</a>
					</div>
                    <a href="https://www.instagram.com/optimalfitnessboston/?hl=en"><Instagram className="header-icon" size={24} style={{marginLeft: 8}}/></a>
                    <a href="https://www.facebook.com/optimalfitnessboston"><Facebook className="header-icon" size={24} style={{marginLeft: 8}} /></a>
                    <a href="mailto:optimalfitnessboston@gmail.com?Subject=Training Inquiry"><EnvelopeOpen className="header-icon" size={24} style={{marginLeft: 8}} /></a>
                </div>
            </div>
        </div>

    );
};

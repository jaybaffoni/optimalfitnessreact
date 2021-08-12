import * as React from 'react';
import Button from "react-bootstrap/Button";
import entrance from "../assets/images/Beach House Entrance.jpg";
import ropes from "../assets/images/IMG_8986.jpg";
import volleyball from "../assets/images/IMG_8920.jpg"
import beachhouse4 from "../assets/images/beach_house1.jpg";
import natickbeachhouse from "../assets/images/natick beach house.JPG";
import beachhouse2 from "../assets/images/IMG_2306.JPG";
import cam from "../assets/images/bh Cam Bear crawl DB drag.jpg"
import {ContainerPanel} from "../components/container-panel";
import {useHistory} from "react-router";
import {useEffect, useState} from "react";
import {Carousel} from "react-bootstrap";

const styles = {
    spacing: {
        margin: 4
    }
}

export function BeachhouseScreen(props) {

    const history = useHistory();

    const handleIntersection = (event) => {
        if (event.isIntersecting) {
            event.target.classList.add('expand-animation');
        } else {
            event.target.classList.remove('expand-animation');
        }
    }

    const navigate = (route) => {
        history.push(route);
    }

    return (
        <ContainerPanel id="beachhouse">
            <div className="row" style={{marginTop: 24}}>
                <div className="col-md-6"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 64}}>
                    <h1 className="title-text" style={{color: 'black'}}>Natick Beach House</h1>
                    <h3 className="subtitle-text">One of a kind indoor beach sand volleyball courts provide a unique training surface and view from our newest gym space. The upstairs mezzanine also features a recovery area designed to maximize your training and keep you feeling your best.</h3>
                    <div>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#personaltraining')}>Personal Training</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#athletes')}>Athlete Strength & Conditioning</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#adultclasses')}>Adult Classes</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact')}>Contact Us</Button>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingBottom: 64}}>
					<iframe className="card"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.2814589909344!2d-71.33587338454512!3d42.31519517918993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3878ef1e0a4dd%3A0x7b81e385b656c9fd!2s18%20Tech%20Cir%2C%20Natick%2C%20MA%2001760!5e0!3m2!1sen!2sus!4v1623239427869!5m2!1sen!2sus"
							style={{width: '100%', height: '100%', border: 0}} allowFullScreen="" loading="lazy"/>
                </div>
            </div>

			<Carousel style={{marginBottom: 64}}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={ropes}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={volleyball}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={beachhouse2}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={cam}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={beachhouse4}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={natickbeachhouse}
					/>
				</Carousel.Item>
			</Carousel>

            <div style={{width: '100%', textAlign: 'center'}} className="card">
                <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="fe160871484b" data-widget-version="1" />
            </div>
        </ContainerPanel>
    );
};

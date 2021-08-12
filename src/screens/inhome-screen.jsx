import * as React from 'react';
import Button from "react-bootstrap/Button";
import {ContainerPanel} from "../components/container-panel";
import inhome1 from "../assets/images/inhome1.JPG";
import inhome2 from "../assets/images/inhome2.jpg";
import inhome3 from "../assets/images/inhome3.jpg";
import inhome4 from "../assets/images/inhome4.jpg";
import {useHistory} from "react-router";
import {Carousel} from "react-bootstrap";
import ropes from "../assets/images/IMG_8986.jpg";
import volleyball from "../assets/images/IMG_8920.jpg";
import beachhouse2 from "../assets/images/IMG_2306.JPG";
import cam from "../assets/images/bh Cam Bear crawl DB drag.jpg";
import beachhouse4 from "../assets/images/beach_house1.jpg";
import natickbeachhouse from "../assets/images/natick beach house.JPG";

const styles = {
    spacing: {
        margin: 4
    }
}

export function InhomeScreen(props) {

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
        <ContainerPanel id="inhome">
            <div className="row" style={{marginTop: 24}}>
                <div className="col-md-12"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 64}}>
                    <h1 className="title-text" style={{color: 'black'}}>In-Home</h1>
                    <h3 className="subtitle-text">Take the travel out of your workout and we will come to you! Either via zoom or in person, your workout will be customized to you and your goals.</h3>
                    <div>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#personaltraining')}>Personal Training</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact')}>Contact Us</Button>
                    </div>
                </div>
            </div>
			<Carousel >
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={inhome1}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={inhome2}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={inhome3}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={inhome4}
					/>
				</Carousel.Item>
			</Carousel>
        </ContainerPanel>
    );
};

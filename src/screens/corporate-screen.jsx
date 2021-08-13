import * as React from 'react';
import Button from "react-bootstrap/Button";
import {ContainerPanel} from "../components/container-panel";
import corp1 from '../assets/images/corporate1.JPG';
import corp2 from '../assets/images/corporate2.jpg';
import row from '../assets/images/row.gif';
import {useHistory} from "react-router";
import {Carousel} from "react-bootstrap";

const styles = {
    spacing: {
        margin: 4
    }
}

export function CorporateScreen(props) {

    const history = useHistory();

    const handleIntersection = (event) => {
        if (event.isIntersecting) {
            event.target.classList.add('expand-animation');
        } else {
            event.target.classList.remove('expand-animation');
        }
    }

	const navigate = (route, data) => {
		if(data) history.push({pathname: route, state: data});
		else history.push(route);
	}

    return (
        <ContainerPanel id="corporate">
			<div className="row">
				<div className="col-md-6">
					<h1 className="title-text" style={{color: 'black'}}>Corporate</h1>
					<h3 className="subtitle-text">We work with business to help encourage employees to healthier lifestyle choices for any workplace. Research shows that corporate wellness can reduce absenteeism, improve productivity, and grow positive morale. Let our team help your team! Reach out if you are interested in having the Optimal Fitness team run your fitness center, host a special group event, or for general ideas on how to help your team to a healthy lifestyle.</h3>
					<Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact', {message: 'Corporate Wellness'})}>Contact Us</Button>
				</div>
				<div className="col-md-6">
					<Carousel style={{marginBottom: 64}}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={corp1}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={corp2}
							/>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>


            <div style={{width: '100%', textAlign: 'center'}} className="card">
                <img src={row} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            </div>
        </ContainerPanel>
    );
};

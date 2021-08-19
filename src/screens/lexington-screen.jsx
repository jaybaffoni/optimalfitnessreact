import * as React from 'react';
import Button from "react-bootstrap/Button";
import athleteClasses from "../assets/images/lexingtonathlete.jpeg";
import ryan from "../assets/images/lexingtonathleteRizzo.jpeg";
import sisters from "../assets/images/lexgintonpersonaltrainingsisters.jpeg";
import personal from '../assets/images/lexingtonpersonaltraining.jpeg';
import lex1 from '../assets/images/File_003.jpeg';
import lex2 from '../assets/images/File_088.jpeg';
import {ContainerPanel} from "../components/container-panel";
import {useHistory} from "react-router";
import {Carousel} from "react-bootstrap";

const styles = {
    spacing: {
        margin: 4
    }
}

export function LexingtonScreen(props) {

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
        <ContainerPanel id="lexington">
            <div className="row" style={{marginTop: 24}}>
                <div className="col-md-6"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 64}}>
                    <h1 className="title-text" style={{color: 'black'}}>Lexington Performance Center</h1>
                    <h3 className="subtitle-text">OFIT 1600 square foot facility conveniently located right off route 95 & route 2A.</h3>
                    <div>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#personaltraining')}>Personal Training</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#athletes')}>Athlete Strength & Conditioning</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact', {loc: 'Lexington Performance Center'})}>Contact Us</Button>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingBottom: 64}}>
					<iframe className="card"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.4042629534683!2d-71.2524640843965!3d42.44041393801565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39c4842059565%3A0x926c87e636d150e5!2s271%20Lincoln%20St%2C%20Lexington%2C%20MA%2002421!5e0!3m2!1sen!2sus!4v1623237031665!5m2!1sen!2sus"
							style={{width: '100%', height: '100%', border: 0}}  allowFullScreen="" loading="lazy"/>
                </div>
            </div>
			<Carousel style={{marginBottom: 64}}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={lex1}
					/>
					{/*<Carousel.Caption>*/}
					{/*	<h3>Slide Title</h3>*/}
					{/*	<p>Slide Subtitle</p>*/}
					{/*</Carousel.Caption>*/}
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={ryan}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={personal}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={sisters}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={athleteClasses}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={lex2}
					/>
				</Carousel.Item>
			</Carousel>
            {/*<div  style={{width: '100%', textAlign: 'center'}} className="card">*/}
            {/*    <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="fe160872484b" data-widget-version="1"/>*/}
            {/*</div>*/}
        </ContainerPanel>
    );
};

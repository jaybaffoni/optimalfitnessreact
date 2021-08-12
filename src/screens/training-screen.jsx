import * as React from 'react';
import {useHistory} from "react-router";
import Button from "react-bootstrap/Button";
import Observer from "@researchgate/react-intersection-observer";
import personalTraining from '../assets/images/pt1.jpg';
import athleteClasses from '../assets/images/lexingtonathlete.jpeg';
import adultClasses from '../assets/images/step.jpg';
import {ContainerPanel} from "../components/container-panel";
import {config} from "../config";

const styles = {
    spacing: {
        margin: 4
    },
    bottomSpacing: {
        marginBottom: 8
    }
}

export function TrainingScreen(props) {

    const history = useHistory();

    const handleIntersection = (event) => {
        if (event.isIntersecting) {
            event.target.classList.add('expand-animation');
        } else {
            event.target.classList.remove('expand-animation');
        }
    }

	const navigate = (route, data) => {
		history.push({pathname: route, state: data});
	}

    return (
        <>
            <ContainerPanel id="personaltraining">
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Personal Training</h1>
                        <h3 className="subtitle-text">Customized individualized program based off of initial evaluation in order to help your body move more efficiently, to prevent injuries, and to establish a healthier lifestyle.</h3>
                        <div>
                            <Button variant="dark" style={styles.spacing} onClick={() => navigate('/lexington')}>Lexington Performance Center</Button><br/>
                            <Button variant="dark" style={styles.spacing} onClick={() => navigate('/beachhouse')}>Natick Beach House</Button><br/>
                            <Button variant="dark" style={styles.spacing} onClick={() => navigate('/inhome')}>In Home</Button><br/>
							<Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact', {message: 'Personal Training'})}>Contact Us</Button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand" src={personalTraining} style={{width: '100%', height: '100%', maxHeight: '500px', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>
            </ContainerPanel>

            <ContainerPanel id="athletes" color={config.primaryColor}>
                <div className="row" style={{color: 'white'}}>
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text">Athlete Strength & Conditioning</h1>
                        <h3 className="subtitle-text">Athlete groups (ages 11-22) are brought through a specific warm up and customized programming, corrective exercises and sports performance exercises based on their goals, sports and evaluations.</h3>
                        <ul>
                            <li className="location-subtitle" style={styles.bottomSpacing}>Warm up</li>
                            <li className="location-subtitle" style={styles.bottomSpacing}>Flexibility / Mobility /
                                Stability
                            </li>
                            <li className="location-subtitle" style={styles.bottomSpacing}>Strength</li>
                            <li className="location-subtitle" style={styles.bottomSpacing}>Quickness / Speed / Agility
                            </li>
                            <li className="location-subtitle" style={styles.bottomSpacing}>Power / Explosiveness</li>
                            <li className="location-subtitle" style={styles.bottomSpacing}>Injury Reduction / Prevention
                            </li>
                        </ul>
                        <div>
                            <Button variant="light" style={styles.spacing} onClick={() => navigate('/lexington')}>Lexington Performance Center</Button><br/>
                            <Button variant="light" style={styles.spacing} onClick={() => navigate('/beachhouse')}>Natick Beach House</Button><br/>
							<Button variant="light" style={styles.spacing} onClick={() => navigate('/contact', {message: 'Athlete Strength & Conditioning'})}>Contact Us</Button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand" src={athleteClasses} style={{width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>
            </ContainerPanel>

            <ContainerPanel id="adultclasses">
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Adult Classes</h1>
                        <h3 className="subtitle-text">Group-based Core and strength-based programs designed to increase your heart rate and help you get the most out of every workout.</h3>
                        <h3 className="subtitle-text">Small group training led by certified instructors that are designed to help you build strength, stability and increase your heart rate to get the most out of your workout. Both bootcamp and circuit style strength groups are available depending on your goals.</h3>
                        <div>
                            <Button variant="dark" style={styles.spacing} onClick={() => navigate('/beachhouse')}>Natick Beach House</Button><br/>
							<Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact', {message: 'Adult Classes'})}>Contact Us</Button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand" src={adultClasses} style={{width: '100%', height: '100%', maxHeight: '500px', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>
            </ContainerPanel>
        </>
    );
};

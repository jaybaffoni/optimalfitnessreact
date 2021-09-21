import * as React from 'react';
import {TestimonialTimeline} from "../components/testimonial-timeline";
import locationPicture from "../assets/images/glass.jpg";
import {FullPanel} from "../components/full-panel";
import Button from "react-bootstrap/Button";
import Observer from "@researchgate/react-intersection-observer";
import missionPicture from "../assets/images/bryan_and_lauri.jpg";
import newsletterPicture from '../assets/images/File_027.jpeg';
import {ContainerPanel} from "../components/container-panel";
import {Col, Form, Modal} from "react-bootstrap";
import {useHistory} from "react-router";
import {useState} from "react";
import axios from "axios";
import {config} from "../config";
import athleteClasses from "../assets/images/lexingtonathlete.jpeg";
import {EnvelopeOpen} from "react-bootstrap-icons";

export function AboutScreen(props) {

	const styles = {
		bottomSpacing: {
			marginBottom: 8
		}
	}

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

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

	const submit = (event) => {
		event.stopPropagation();
		let formData = new FormData();
		formData.append("First Name", firstName);
		formData.append("Last Name", lastName);
		formData.append("E-Mail", email);
		console.log(formData);
		axios.post("https://script.google.com/macros/s/AKfycbxp1yD3-Um_dhBRUqvcGAnB9uQkqLmVXmGpP0yvyRDEXdCwAKk-9_6jAolqSSE65kzP2Q/exec", formData)
		.then(response => {
			console.log('response', response);
			handleShow();
		})
		.catch(error => {
			console.error(error);
		})
	}

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <div className="screen">
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Success!</Modal.Title>
				</Modal.Header>
				<Modal.Body>Thanks for subscribing--this may take a day or two to take effect.  Hard Work Wins!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
            <ContainerPanel>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Our Mission</h1>
                        <h3 className="subtitle-text">Every staff member at OFIT has the expertise to customize workouts for each individual client, whether they’re a high school or college athlete, weekend warrior or someone trying to better themselves, and each program is designed and implemented around the individual, their goals and their needs.  HARD WORK WINS!</h3>
                        <Button variant="dark" onClick={() => navigate('/contact', {message: 'About Optimal Fitness'})}>Learn More</Button>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand" src={missionPicture} style={{width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>
            </ContainerPanel>
            <FullPanel image={locationPicture}>
                <h1 className="title-text" style={{width: '100%', textAlign: 'center'}}>Testimonials</h1>
                <TestimonialTimeline />
            </FullPanel>
			<ContainerPanel id="employment" color={config.primaryColor}>
				<h1 className="title-text" style={{color: 'white'}}>Employment Opportunities</h1>
				<div className="row" style={{color: 'white'}}>
					<div className="col-md-6" style={{marginBottom: 8}}>
						<h4>Personal Trainer</h4>
						<ul>
							<li className="location-subtitle" style={styles.bottomSpacing}>Assist, monitor, and instruct clients and ensure safe and effective use of equipment</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Motivate clients to get results through goal setting, follow-up, and re-assessments</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Create exercise routines to be new and enjoyable for clients</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Help clean and maintain gym spaces</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Strong communication skills to build relationships with both clients and coworkers</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Work proficiently with Google drive and Mindbody for all administrative work within the company</li>
						</ul>
						<div style={{width: '100%', textAlign: 'center', marginBottom: 16}}>
							<a href="mailto:laurie@optimalfotnessboston.com?Subject=Personal Trainer Application"><Button variant="light">Apply Now</Button></a>
						</div>
					</div>
					<div className="col-md-6" style={{marginBottom: 8}}>
						<h4>Strength & Conditioning Coach</h4>
						<ul>
							<li className="location-subtitle" style={styles.bottomSpacing}>Establish and maintain a strength and conditioning program for privates, small groups, and large groups, with the three major goals of improving athletic performance, reducing athletic injuries, and teaching lifelong fitness and movement skills</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Maintain positive energy</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Help clean and maintain gym spaces</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Strong communication skills to build relationships with both clients and coworkers</li>
							<li className="location-subtitle" style={styles.bottomSpacing}>Work proficiently with Google drive and Mindbody for all administrative work within the company</li>
						</ul>
						<div style={{width: '100%', textAlign: 'center'}}>
							<a href="mailto:laurie@optimalfotnessboston.com?Subject=Strength and Conditioning Coach Application"><Button variant="light">Apply Now</Button></a>
						</div>
					</div>
				</div>
			</ContainerPanel>
            <ContainerPanel>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Newsletter</h1>
                        <h3 className="subtitle-text">View the latest <a download href="summer2021.pdf">newsletter</a>, and subscribe to our emailed version below!</h3>
                        <Form>
							<Form.Group controlId="formGridFirstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control placeholder="Enter First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
							</Form.Group>

							<Form.Group controlId="formGridLastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control placeholder="Enter Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
							</Form.Group>

							<Form.Group controlId="formGridEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
							</Form.Group>

							<Button variant="dark" onClick={submit}>
								Submit
							</Button>
                        </Form>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand" src={newsletterPicture} style={{width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>

            </ContainerPanel>
        </div>
    );
};

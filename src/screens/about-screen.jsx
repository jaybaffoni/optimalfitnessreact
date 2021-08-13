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

export function AboutScreen(props) {

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
                        <h3 className="subtitle-text">As a staff, OFIT looks at every client individually, whether they’re a high school or college athlete, weekend warrior or someone trying to better themselves, and each program is designed and implemented around the individual, their goals and their needs.  HARD WORK WINS!</h3>
                        <Button variant="dark" onClick={() => navigate('/contact')}>Learn More</Button>
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
            <ContainerPanel>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Newsletter</h1>
                        <h3 className="subtitle-text">View the latest <a href="./assets/newsletters/summer2021.pdf">newsletter</a>, and subscribe to our emailed version below!</h3>
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

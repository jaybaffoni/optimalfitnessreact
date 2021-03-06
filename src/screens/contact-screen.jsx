import * as React from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import contactPicture from "../assets/images/IMG_3543.JPG";
import {ContainerPanel} from "../components/container-panel";
import {useState} from "react";
import axios from 'axios';
import {useLocation} from "react-router-dom";

export function ContactScreen(props) {

	const {state} = useLocation();
	console.log('state', state);
	let message = '';
	let loc = '';
	if(state){
		if(state.message){
			message = state.message;
		}
		if(state.loc){
			loc = state.loc;
		}
	}

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
	const [location, setLocation] = useState(loc);
    const [interests, setInterests] = useState(message);

    const [errors, setErrors] = useState([]);

    const checkValues = () => {
    	let tempErrors = [];
    	if(!firstName || firstName == '') tempErrors.push('First Name');
    	if(!lastName || lastName == '') tempErrors.push('Last Name');
    	if((!email || email == '') && (!phone || phone == '')) tempErrors.push('Phone or E-Mail');
    	if(!location || location == '' || location == 'Select Location') tempErrors.push('Location');
    	setErrors([...tempErrors]);
    	if(tempErrors.length == 0) return true;
    	return false;
	}

    const submit = (event) => {
    	if(!checkValues()) {
    		setShowError(true);
    		return;
		}
		event.stopPropagation();
		let formData = new FormData();
		formData.append("First Name", firstName);
		formData.append("Last Name", lastName);
		formData.append("E-Mail", email);
		formData.append("Phone", phone);
		formData.append("Location", location);
		formData.append("Interests", interests);
		console.log(formData);
		axios.post("https://script.google.com/macros/s/AKfycbwPObswAArXCWSenO5UyceoATNCnIwK6HKj2wHTsnJUQUOqbEP58aTFKf1ewoimj9r8/exec", formData)
		.then(response => {
			console.log('response', response);
			handleShow();
		})
		.catch(error => {
			console.error(error);
		})
    }

	const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <div className="screen">
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Success!</Modal.Title>
				</Modal.Header>
				<Modal.Body>Thanks for the response--someone will get back to you shortly.  Hard Work Wins!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showError} onHide={() => setShowError(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Error</Modal.Title>
				</Modal.Header>
				<Modal.Body>Please provide values for the following fields:
					{errors.map((error, index) => {
						return (
							<li key={index}>{error}</li>
						)
					})}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowError(false)}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
            <ContainerPanel>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Contact Us</h1>
                        <h3 className="subtitle-text">Submit your message below and someone will be back to you shortly!</h3>
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

                            <Form.Group controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control placeholder="Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                            </Form.Group>

							<Form.Group controlId="formGridLocation">
								<Form.Label>Location</Form.Label>
								<Form.Control as="select" value={location} onChange={(event) => setLocation(event.target.value)}>
									<option value="">Select Location</option>
									<option value="Lexington Performance Center">Lexington Performance Center</option>
									<option value="Natick Beach House">Natick Beach House</option>
									<option value="Corporate">Corporate</option>
									<option value="In-Home">In-Home</option>
									<option value="The 'Quin House">The 'Quin House</option>
								</Form.Control>
							</Form.Group>

                            <Form.Group controlId="formGridInterests">
                                <Form.Label>Your Interests</Form.Label>
                                <Form.Control as="textarea" rows={3} value={interests} onChange={(event) => setInterests(event.target.value)} />
                            </Form.Group>

                            <Button variant="dark" onClick={submit}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <img src={contactPicture} style={{width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>

            </ContainerPanel>
        </div>
    );
};

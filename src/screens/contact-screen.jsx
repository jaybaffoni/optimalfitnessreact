import * as React from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import contactPicture from "../assets/images/IMG_3543.JPG";
import {ContainerPanel} from "../components/container-panel";
import {useState} from "react";

export function ContactScreen(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [interests, setInterests] = useState('');

    const submit = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        console.log(interests);
    }

    return (
        <div className="screen">
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

                            <Form.Group controlId="formGridPhone">
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

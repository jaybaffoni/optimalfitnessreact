import * as React from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import contactPicture from "../assets/images/IMG_3543.JPG";
import {ContainerPanel} from "../components/container-panel";

export function ContactScreen(props) {
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
                                <Form.Control placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group controlId="formGridPhone">
                                <Form.Label>Your Interests</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="dark" type="submit">
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

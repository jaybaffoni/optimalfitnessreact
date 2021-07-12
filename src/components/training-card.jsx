import * as React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {config} from "../config";
import {useHistory} from "react-router";

export function TrainingCard(props) {

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
        <Card style={{height: '100%'}}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body style={{color: config.primaryColor, display: 'grid', gridTemplateRows: 'auto 1fr auto', height: '100%'}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="dark" onClick={() => navigate(props.route)} style={{width: '100%'}}>Learn More</Button>
            </Card.Body>
        </Card>
    );
};

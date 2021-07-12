import * as React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {config} from "../config";

export function TrainingCard(props) {

    const handleClick = () => {
        //TODO navigate to props.route
    }

    return (
        <Card style={{height: '100%'}}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body style={{color: config.primaryColor, display: 'grid', gridTemplateRows: 'auto 1fr auto', height: '100%'}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button variant="dark" onClick={() => handleClick()} style={{width: '100%'}}>Learn More</Button>
            </Card.Body>
        </Card>
    );
};

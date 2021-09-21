import * as React from 'react';
import {useState} from "react";
import {Navbar} from 'react-bootstrap';
import {XCircle} from "react-bootstrap-icons";
import {useHistory} from "react-router";
import Button from "react-bootstrap/Button";
import {config} from "../config";

const styles = {
    grid: {
        padding: 16,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr auto'
    },
    link: {
        color: 'dodgerblue',
        cursor: 'pointer'
    }
}

export function Snackbar(props) {

    const history = useHistory();

    const [show, setShow] = useState(true);

    const close = () => {
        setShow(false);
    }

    const navigate = (route, data) => {
        if(data) history.push({pathname: route, state: data});
        else history.push(route);
    }

    if(!show) return null;

    return (
        <Navbar expand="lg" bg="light" variant="light" fixed="bottom" expanded={false} style={{borderTop: '1px solid black'}}>
            <div style={styles.grid}>
                <div>
                    <h3>We're Hiring! Browse our <a style={styles.link} onClick={() => navigate('/about#employment')}>Employment Opportunities</a>!</h3>
                </div>
                <XCircle className="header-icon" color='black' size={24} style={{marginLeft: 8}} onClick={close}/>
            </div>
        </Navbar>
    );
};

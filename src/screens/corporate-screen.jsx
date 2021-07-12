import * as React from 'react';
import Button from "react-bootstrap/Button";
import {ContainerPanel} from "../components/container-panel";
import corp1 from '../assets/images/corporate1.JPG';
import corp2 from '../assets/images/corporate2.jpg';
import row from '../assets/images/row.gif';
import {useHistory} from "react-router";

const styles = {
    spacing: {
        margin: 4
    }
}

export function CorporateScreen(props) {

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
        <ContainerPanel id="corporate">
            <h1 className="title-text" style={{color: 'black'}}>Corporate</h1>
            <h3 className="subtitle-text">We work with business to help encourage employees to healthier lifestyle choices for any workplace. Research shows that corporate wellness can reduce absenteeism, improve productivity, and grow positive morale. Let our team help your team! Reach out if you are interested in having the Optimal Fitness team run your fitness center, host a special group event, or for general ideas on how to help your team to a healthy lifestyle.</h3>
            <Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact')}>Contact Us</Button>
            <div className="row" style={{marginTop: 24}}>
                <div className="col-md-6">
                    <div style={{width: '100%', textAlign: 'center'}} className="card">
                        <img src={corp1} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{width: '100%', textAlign: 'center'}} className="card">
                        <img src={corp2} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', textAlign: 'center'}} className="card">
                <img src={row} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            </div>
        </ContainerPanel>
    );
};

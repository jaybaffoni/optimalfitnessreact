import * as React from 'react';
import Button from "react-bootstrap/Button";
import {ContainerPanel} from "../components/container-panel";
import inhome1 from "../assets/images/inhome1.JPG";
import inhome2 from "../assets/images/inhome2.jpg";
import inhome3 from "../assets/images/inhome3.jpg";
import inhome4 from "../assets/images/inhome4.jpg";
import {useHistory} from "react-router";

const styles = {
    spacing: {
        margin: 4
    }
}

export function InhomeScreen(props) {

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
        <ContainerPanel id="inhome">
            <div className="row" style={{marginTop: 24}}>
                <div className="col-md-6"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 64}}>
                    <h1 className="title-text" style={{color: 'black'}}>In-Home</h1>
                    <h3 className="subtitle-text">Take the travel out of your workout and we will come to you! Either via zoom or in person, your workout will be customized to you and your goals.</h3>
                    <div>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/training#personaltraining')}>Personal Training</Button><br/>
                        <Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact')}>Contact Us</Button>
                    </div>
                </div>
                <div className="col-md-6" style={{marginBottom: 8}}>
                    <div style={{width: '100%', textAlign: 'center'}} className="card">
                        <img src={inhome4} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', textAlign: 'center'}} className="card">
                <img src={inhome1} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div style={{width: '100%', textAlign: 'center'}} className="card">
                        <img src={inhome3} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{width: '100%', textAlign: 'center'}} className="card">
                        <img src={inhome2} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
        </ContainerPanel>
    );
};

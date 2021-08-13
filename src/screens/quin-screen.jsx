import * as React from 'react';
import Button from "react-bootstrap/Button";
import {ContainerPanel} from "../components/container-panel";
import quin1 from '../assets/images/quin1.jpg';
import quin2 from '../assets/images/quin2.jpg';
import {useHistory} from "react-router";

const styles = {
    spacing: {
        margin: 4
    }
}

export function QuinScreen(props) {

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

    return (
        <ContainerPanel id="quin">
            <div className="row" style={{marginTop: 24}}>
                <div className="col-md-6"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 64}}>
                    <h1 className="title-text" style={{color: 'black'}}>The 'Quin House</h1>
                    <h3 className="subtitle-text">Optimal Fitness has partnered with the hottest new social club in Boston - THE 'QUIN HOUSE. While the club opens its doors on June 29th, the Health Club will celebrate its grand opening on September 1st.
                        The ‘Quin House is a gathering place that reflects the new Boston—a city that continues to transform itself into a wellspring of technological, artistic, and cultural innovation. Nestled in the heart of Boston’s Back Bay neighborhood at 217 Commonwealth Avenue, this diverse social club will bring together the region’s leaders, creators, innovators, and rising stars to forge meaningful connections. The clubhouse was originally The Algonquin Club, established in 1886. It remains the only building in Boston specifically designed as a social club. The ‘Quin House's interior has been re-imagined by renowned Creative Director and Designer, Ken Fulk as a vibrant playground for the mind, body and spirit. Designed to stimulate the senses from eye-catching decor to the delicious culinary experiences and exciting programming. The result is a chic, comfortable and inviting home away from home.
                        Optimal Fitness is excited to join Hexagon Properties in creating a place for members to connect, dine, play, inspire, and train! We are currently looking to hire part time concierges, trainers, and massage therapists for our Wellness Center and Spa area.</h3>
					<Button variant="dark" style={styles.spacing} onClick={() => navigate('/contact', {message: 'The \'Quin'})}>Contact Us</Button>
                </div>
                <div className="col-md-6" style={{marginBottom: 8}}>
                    <div style={{width: '100%', textAlign: 'center'}} className="card">
                        <img src={quin1} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', textAlign: 'center'}} className="card">
                <img src={quin2} style={{width: '100%', height: 'auto', objectFit: 'cover'}}/>
            </div>
        </ContainerPanel>
    );
};

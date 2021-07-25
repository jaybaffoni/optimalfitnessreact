import * as React from 'react';
import video from '../assets/images/optimal_landing.mp4';
import whiteLogo from '../assets/images/optimal-logo-white.svg';
import missionPicture from '../assets/images/testamonial-group.JPG';
import staffPicture from '../assets/images/rondo_rehab.jpg'
import locationPicture from '../assets/images/gym.JPG';
import trainingPicture from '../assets/images/sunrise.jpg';
import personalTraining from '../assets/images/pt1.jpg';
import athleteClasses from '../assets/images/lexingtonathlete.jpeg';
import adultClasses from '../assets/images/adultclasses.jpg';

import Button from "react-bootstrap/Button";
import {ContainerPanel} from "../components/container-panel";
import {FullPanel} from "../components/full-panel";
import {LocationTimeline} from "../components/location-timeline";
import {TrainingCard} from "../components/training-card";
import Observer from '@researchgate/react-intersection-observer';
import {useHistory} from "react-router";

const styles = {
    videoContainer: {
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        height: 'calc(100vh - 50px)',
        maxHeight: 'calc(100vh - 50px)'
    },
    video: {
        minHeight: 'calc(100vh - 50px)',
        height: 'calc(100vh - 50px)',
        position: 'absolute',
        left: '-500%', right: '-500%',
        margin: 'auto'
    },
    frame: {
        position: 'absolute',
        top: 0, left: 0,
        background: '#00000040',
        height: '100vh',
        width: '100%',
        display: 'grid',
        placeItems: 'center'
    },
    brandInfo: {
        width: '100%',
        display: 'grid',
        placeItems: 'center'
    }
}

export function HomeScreen(props) {

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
        <>
            <div style={styles.videoContainer}>
                <video autoPlay muted loop playsInline style={styles.video}>
                    <source src={video} type="video/mp4" />
                </video>
                <div style={styles.frame}>
                    <div style={styles.brandInfo}>
                        <img src={whiteLogo} className="logo-img"/>
                        <p className="motto-text">Professionals in Health & Human Performance</p>
                        <Button variant="light" onClick={() => navigate('/contact')}>Contact Us</Button>
                    </div>
                </div>
            </div>
            <ContainerPanel>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>About Us</h1>
                        <h3 className="subtitle-text">Optimal Fitness Boston is a unique and privately owned fitness studio offering personal and small group training, strength and conditioning for athletes, corporate wellness programs and group classes. We pride ourselves in helping each individual athlete or client  feel better, move more efficiently, live a healthier lifestyle or increase performance in their sport. The Optimal Fitness staff are certified through National accreditation programs both as strength and conditioning coaches as well as personal trainers.</h3>
                        <Button variant="dark" onClick={() => navigate('/about')}>Learn More</Button>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand" src={missionPicture} style={{width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>
            </ContainerPanel>
            <FullPanel image={locationPicture}>
                <h1 className="title-text" style={{width: '100%', textAlign: 'center'}}>Locations</h1>
                <LocationTimeline />
            </FullPanel>
            <ContainerPanel>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8}}>
                        <h1 className="title-text" style={{color: 'black'}}>Expert Staff</h1>
                        <h3 className="subtitle-text">The staff at Optimal Fitness consists of a former Celtic's Head Strength and Conditioning Coach, Exercise Specialists, Personal Trainers, and Group Instructors with degrees in Sports Medicine, Sports Management, Kinesiology, Exercise Science, and Health Promotion.</h3>
                        <Button variant="dark" onClick={() => navigate('/staff')}>Meet the Team</Button>
                    </div>
                    <div className="col-md-6" style={{marginBottom: 8}}>
                        <Observer onChange={handleIntersection}>
                            <img className="expand expand-animation" src={staffPicture} style={{width: '100%', height: '100%', maxHeight: '100%', objectFit: 'cover'}}/>
                        </Observer>
                    </div>
                </div>
            </ContainerPanel>
            <FullPanel image={trainingPicture}>
                <h1 className="title-text" style={{width: '100%', textAlign: 'center'}}>Training</h1>
                <Observer onChange={handleIntersection}>
                    <div className="row">
                        <div className="col-md-4" style={{marginTop: 16}}>
                            <TrainingCard route="/training#personaltraining" image={personalTraining} title={'Personal Training'} text={'Customized individualized program based off of initial evaluation in order to help your body move more efficiently, to prevent injuries, and to establish a healthier lifestyle'}/>
                        </div>
                        <div className="col-md-4" style={{marginTop: 16}}>
                            <TrainingCard route="/training#athletes" image={athleteClasses} title={'Athlete Strength & Conditioning'} text={'Athlete groups (ages 11-22) are brought through a specific warm up and customized programming, corrective exercises and sports performance exercises based on their goals, sports and evaluations'}/>
                        </div>
                        <div className="col-md-4" style={{marginTop: 16}}>
                            <TrainingCard route="/training#adultclasses" image={adultClasses} title={'Adult Classes'} text={'Group-based Core and strength-based programs designed to increase your heart rate and help you get the most out of every workout'}/>
                        </div>
                    </div>
                </Observer>
            </FullPanel>
        </>

    );
};

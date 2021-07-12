import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Building, Facebook, GeoAltFill, Laptop, Sun} from "react-bootstrap-icons";
import {config} from "../config";
import {useHistory} from "react-router";
import { HashLink as Link } from 'react-router-hash-link';

export function LocationTimeline(props) {

    const history = useHistory();

    const navigate = (route) => {
        history.push(route);
    }

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<GeoAltFill />}
            >
                <a className="blue-link" href="/lexington">
                    <h3 className="vertical-timeline-element-title">Lexington Performance Center</h3>
                    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: 8}}>271 Lincoln St, Lexington, MA 02421</h5>
                    <p>OFIT 1600 square foot facility conveniently located right off route 95 & route 2A</p>
                </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<GeoAltFill />}
            >
                <a className="blue-link" href="/beachhouse">
                    <h3 className="vertical-timeline-element-title">Natick Beach House</h3>
                    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: 8}}>18 Tech Cir, Natick, MA 01760</h5>
                    <p>One of a kind indoor beach sand volleyball courts</p>
                </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Building />}
            >
                <a className="blue-link" href="/corporate">
                    <h3 className="vertical-timeline-element-title">Corporate</h3>
                    <p>We work with businesses to help encourage employees to healthier lifestyle choices for any workplace</p>
                </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<GeoAltFill />}
            >
                <a className="blue-link" href="/quin">
                    <h3 className="vertical-timeline-element-title">The 'Quin</h3>
                    <p>Optimal Fitness has partnered with the hottest new social club in Boston - THE 'QUIN HOUSE</p>
                </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Laptop />}
            >
                <a className="blue-link" href="/inhome">
                    <h3 className="vertical-timeline-element-title">In-Home</h3>
                    <p>Take the travel out of your workout and we will come to you!</p>
                </a>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

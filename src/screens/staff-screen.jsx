import * as React from 'react';
import {Image} from "react-bootstrap";
import StaffAvatar from '../components/staff-avatar';
import StaffBio from '../components/staff-bio';
import {config, staff} from "../config";

export function StaffScreen(props) {

	const width = 1108 / staff.length;

    return (
        <div className="container" style={{marginTop: 24}}>

                <div style={{textAlign: 'center', display: 'inline-block'}}>
                    {staff.map((person, i) => <StaffAvatar key={i} data={person} width={width}/>)}
                </div>
            {staff.map((person, i) => <StaffBio key={i} data={person}/>)}
        </div>
    );
};

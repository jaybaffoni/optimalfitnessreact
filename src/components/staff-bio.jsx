import * as React from 'react';
import {Image} from "react-bootstrap";
import {config} from "../config";


const StaffBio = ({data}) => {

  let {id, headshot, name, title, certification, qualificationList, paragraphList} = data;

  return (
      <div id={id} className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
                <Image roundedCircle src={headshot} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
                <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
                    <h1>{name}</h1>
                    <h3>{title}</h3>
                    <h5>{certification}</h5>
                    {qualificationList.map(qualification => <h5>{qualification}<br/></h5>)}
                </div>
                <div style={{textAlign: 'justify'}}>
                    {paragraphList.map(paragraph => <p>{paragraph}</p>)}
                </div>
            </div>
  )
};

export default StaffBio;

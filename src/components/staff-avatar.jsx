import {Image} from "react-bootstrap";

const StaffAvatar = ({data, width}) => {

  let {id, headshot, nameList} = data;

  return (
    <a href={'#' + id}><div style={{display: 'inline-block', maxWidth: {width}}}>
        <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
            <Image roundedCircle src={headshot} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
            {nameList.map(name => <h5 style={{marginBottom: 0}}>{name}</h5>)}
        </div>
    </div></a>
  )
};

export default StaffAvatar
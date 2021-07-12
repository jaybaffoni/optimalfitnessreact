import * as React from 'react';

export function ContainerPanel(props) {
    return (
        <div id={props.id} style={{width: '100%', backgroundColor: props.color || 'white'}}>
            <div className="container" style={{paddingTop: 64, paddingBottom: 64}}>
                {props.children}
            </div>
        </div>
    );
};

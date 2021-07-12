import * as React from 'react';
import {config} from "../config";
import {useState} from "react";

const styles = {
    card: {
        borderRadius: 4,
        padding: 24,
        height: '100%',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'
    },
    text: {
        fontSize: 36,
        fontWeight: 400
    }
}

export function TransparentCard(props) {

    const [backgroundColor, setBackgroundColor] = useState('#ffffffc0');
    const [textColor, setTextColor] = useState(config.primaryColor);

    const handleMouseUp = () => {
        setTextColor(config.primaryColor);
        setBackgroundColor('#ffffffc0')
    }

    const handleMouseDown = () => {
        setTextColor('white');
        setBackgroundColor(config.primaryColor);
    }

    return (
        <div style={{...styles.card, backgroundColor: backgroundColor}} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp}>
            <h3 style={{...styles.text, color: textColor}}>{props.text}</h3>
        </div>
    );
};

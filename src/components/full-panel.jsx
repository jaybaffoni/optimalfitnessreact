import * as React from 'react';

export function FullPanel(props) {

    const styles = {
        container: {
            backgroundImage: `url(${props.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            color: 'white'
        },
        overlay: {
            paddingBottom: 64,
            paddingTop: 64,
            height: '100%',
            width: '100%',
            background: '#00003440'
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.overlay}>
                <div className="container">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import blueLogo from '../../static/images/Soothe-logo-blue.png';
export default class Home extends React.Component {
    render() {
        return (<header>
            <img src={blueLogo} alt="Soothe logo" />
        </header>);
    }
}
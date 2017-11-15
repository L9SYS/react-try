import React, { Component } from 'react';
import { render } from 'react-dom';

import '../style/style.scss';

import sameImg from '../assets/sameImg.jpg';

export default class Hello extends Component {
    render() {
        return (
            <div>
            Hello from react

            <img src={ sameImg } alt='Danny Choo Hatsune Miku Dollfie' />
        </div>
    );
    }
}

render(<Hello />, document.getElementById('app'));

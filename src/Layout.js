import React, { Component } from 'react';
import './Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <div className='Layout-bar Layout-top-bar'>
                    <span>
                        <span className='Navigation-button' 
                            onClick={() => this.props.updateContent('home')}>Home</span>
                        <span className='Navigation-button'
                            onClick={() => this.props.updateContent('gallery')}>Gallery</span>
                        <span className='Navigation-button'
                            onClick={() => this.props.updateContent('contact')}>Contact</span>
                    </span>
                </div>
                <this.props.body/>
                <div className='Layout-bar Layout-bottom-bar'></div>
            </div>
        );
    }
}
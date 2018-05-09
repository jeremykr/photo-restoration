import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <span className='Contact'>
                <h1 className='Contact-header'>Contact me!</h1>
                <div className='Contact-info-box'>
                    <div id="Contact-email" className="Contact-info">
                        <strong>Email:</strong> not_a_real_email@website.com
                    </div>
                    <div id="Contact-phone" className="Contact-info">
                        <strong>Phone:</strong> (123) 456-7890 
                    </div>
                </div>
            </span>
        );
    }
}
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <span>
                <h1 className='Contact-header'>Contact me!</h1>
                <ContactForm/>
            </span>
        );
    }
}
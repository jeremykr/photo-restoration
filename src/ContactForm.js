import React, { Component } from 'react';
import './ContactForm.css';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            text: ''
        }
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className='ContactForm' onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        className='ContactForm-input'
                        name='name' 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder='Name'
                        size='50'
                    />
                </div>
                <div className='ContactForm-input ContactForm-email'>
                    <input 
                        className='ContactForm-input'
                        name='email' 
                        type='email' 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder='Email'
                        size='50'
                    />
                </div>
                <div className='ContactForm-input ContactForm-text'>
                    <textarea 
                        className='ContactForm-input'
                        name='text' 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder='Type your message here.'
                        cols='50'
                        rows='10'
                    />
                </div>
                <input className='ContactForm-submit' type='submit' value='Submit'/>
            </form>
        );
    }
}
import React, { Component } from 'react';
import FourOhFour from './404';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import Layout from './Layout';
import './App.css';

const PAGES = {
    'home': Home,
    'gallery': Gallery,
    'contact': Contact
}

class App extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            Page: Home
        };
    }

    render() {
        return <Layout 
            body={this.state.Page} 
            updateContent={this.updateContent}
        />;
    }

    updateContent(page) {
        this.setState({
            Page: PAGES[page] || FourOhFour
        });
    }
}

export default App;

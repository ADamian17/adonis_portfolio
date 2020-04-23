import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResumaModal from '../ResumeModal/ResumeModal';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listener: null,
      status: 'top',
    };
  }

  componentDidMount() {
    this.setState({
      listener: this.handleScroll,
    });
  }

  handleScroll = document.addEventListener('scroll', () => {
    let scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 120) {
      if (this.state.status !== 'changeColor') {
        this.setState({ status: 'changeColor' });
      }
    } else {
      if (this.state.status !== 'top') {
        this.setState({ status: 'top' });
      }
    }
  });

  componentWillUpdate() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <header
        className="navbar_container"
        style={{
          backgroundColor: this.state.status === 'top' ? 'transparent' : 'yellow',
          position: 'fixed',
        }}
      >
        <div>
          <Link to="/">ADP</Link>
        </div>
        <nav>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <ResumaModal />
        </nav>
      </header>
    );
  }
}

export default Navbar;

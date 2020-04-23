import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
// , NavLink

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

  handleScroll = document.addEventListener('scroll', (e) => {
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
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume">resume</Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;

// export default class Header extends React.Component {
//   constructor(props) {
//     super(props);

//     this.listener = null;
//     this.state = {
//       status: "top"
//     };
//   }

//   componentDidUpdate() {
//     document.removeEventListener("scroll", this.listener);
//   }

//   render() {
//     return (
//       <p
//         style={{
//           backgroundColor: this.state.status === "top" ? "red" : "green",
//           color: this.state.status === "top" ? "white" : "blue",
//           position: "fixed"
//         }}
//       >
//         Amir
//       </p>
//     );
//   }
// }

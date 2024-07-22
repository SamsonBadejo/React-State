// src/App.js

import React, { Component } from 'react';
import './App.css'; // You can create custom CSS for animations and transitions

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Badejo Samson Oluwaseun',
        bio: 'A passionate developer from Lagos, Nigeria.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer'
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        <button className="toggle-btn" onClick={this.toggleShow}>
          {shows ? 'Hide' : 'Show'} Profile
        </button>
        <div className="time-interval">
          Time since mounted: {mountedTime} seconds
        </div>
        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt="Profile" className="profile-img" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;

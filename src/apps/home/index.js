import React, { Component } from 'react';

import AdminLanding from './components/AdminLanding';
import AdminEventsLanding from './components/AdminLandingEvents';
import UserLanding from './components/UserLanding';
import UserEventsLanding from './components/UserEventsLanding';

import './home.less';

class Home extends Component {
  constructor(props){
    super(props)

    this.updateView = this.updateView.bind(this);

    this.state = {
      view: 'admin'
    }
  }

  updateView(e){
    this.setState({
      view: e.target.value
    })
  }

  render() {
    return (
      <div className="wrapper">
        <LandingPage view={this.state.view} />
        <div className="home-view-toggle">
          <label>Select a User to Change View</label>
          <select className="form-control" onChange={this.updateView}>
            <option value="admin">Admin</option>
            <option value="adminEvents">Admin with Events</option>
            <option value="user">User</option>
            <option value="userEvents">User with Events</option>
          </select>
        </div>
      </div>
    );
  }
}

const LandingPage = ({view}) => (
  <div>
    { view === 'admin' ? <AdminLanding /> : null }
    { view === 'adminEvents' ? <AdminEventsLanding /> : null }
    { view === 'user' ? <UserLanding /> : null }
    { view === 'userEvents' ? <UserEventsLanding /> : null }
  </div>
);

export default Home;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.checkActive = this.checkActive.bind(this);
  }

  checkActive(name){
   if (name === this.props.activeName) {
     return 'active';
   }
  }

  render(){
    return (
      <ul className="nav nav-links transparent" style={{marginTop: 20, paddingLeft: 0}}>
        <li className={this.checkActive("browse")}>
          <Link to="/events/admin/browse/" className="nav-link"><span>Browse</span></Link>
        </li>
        <li className={this.checkActive("log")}>
          <Link to="/events/admin/log/" className="nav-link"><span>Your Log</span></Link>
        </li>
        <li className={this.checkActive("manage")}>
          <Link to="/events/admin/manage/attendance" className="nav-link"><span>Manage</span></Link>
        </li>
        <Link to="/events/admin/create" className="btn btn-primary">Add Event</Link>
      </ul>
    )
  }
}
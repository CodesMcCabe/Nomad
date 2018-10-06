import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="tabs">
          <NavLink exact to='/'>
            Dashboard
          </NavLink>
          <NavLink to='/inventory'>
            Inventory
          </NavLink>
          <NavLink to='/trading'>
            Trading
          </NavLink>
          <NavLink to='/worlds'>
            Worlds
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);

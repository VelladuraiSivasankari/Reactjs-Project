import React, { Component } from 'react';
import Settings from './Settings';
import Gridnew from './Gridnew';

class Navbar extends Component { 

  render() {
    return(<div>
        <div class="ui large menu">
  <a class="active item">
    <i class="video icon"></i>
    Home
  </a>
  <a class="item">
  <i class="comment icon"></i>
    Chat
  </a>
  <a class="item">
  <i class="clock icon"></i>
    Meetings
  </a>
  <a class="item">
  <i class="user icon"></i>
    Contacts
  </a>
  <div class="right menu">
    <div class="item">
      <div class="transparent icon input">
      <input type="text" placeholder="Search ..."  />
      </div>
    </div>
    <a class="item">
      Logout
    </a>
 </div>
</div>
<Settings />
<Gridnew />
</div>
    );
    
  }
}

export default Navbar;
import React, { Component } from 'react';
import './joinMeeting.css'
class JoinMeeting extends Component {
 
  render() {
    
      return ( 
         <div class="container-div"> 
         <h1  style={{textAlign:"center"}}>Join Meeting </h1><br />
     
          <form name="myform" method="post">
              <div class="input">
              <input type="text" name="meetingID" placeholder="Enter meeting ID or Personal Link name" required style={{width:"350px", height:"25px",borderRadius:"4px"}}></input>
              <br/> <br/>
                <input type="text" name="username" placeholder="Enter your name" required style={{width:"350px", height:"25px",borderRadius:"4px"}}></input><br /><br/>
                </div>

        <div class="checkbox">
            <input type="checkbox" />
            <label>Remember my name for future meetings</label>
            <br /><br />
            <input type="checkbox" />
            <label>Do not connect to audio</label><br /><br />
            <input type="checkbox" />
            <label>Turn off my video</label><br /><br />
         </div>
                
            <div class="button" style={{float:"right"}}>
                  <button class="primary button" style={{backgroundColor:"blue", color:"white", borderColor:"blue", width:"100px", height:"30px"}} >
                  Join
                  </button>&nbsp;&nbsp;
                  <button class="button" style={{ width:"100px", height:"30px"}} >
                  Cancel
                  </button>
            </div>
        </form>
        </div>
      

      );
  }
}

export default JoinMeeting;
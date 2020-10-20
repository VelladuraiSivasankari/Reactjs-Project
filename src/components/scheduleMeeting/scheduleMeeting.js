import React from 'react';
import { Divider, Button } from 'semantic-ui-react';

class ScheduleMeeting extends React.Component{
    render(){


 
    return(
        <form className="ui form">
            <h1><b>Schedule Meeting</b></h1>
        <div class=" four wide field" style={{display:'flex'}}>
          <label><b>Topic: </b></label><br/>
          <input type="text" name="topic" placeholder="Your Meeting Topic"   />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" name="Invite Link" placeholder="add participants" />
        </div>
        <br/>
        
        <div className="inline fields" style={{display:"flex"}}>
    
    <div className="four wide field">
    <label><b>Start:</b></label>
    <div class="field">   
    <input id="date" type="date" name="appt-date" ></input>
        
    </div>
    </div>
      <div className="two wide field"> 
        <input id="time" type="time" name="appt-time"></input></div>
      
</div><br/>


<div class="inline fields" style={{display:"flex"}}>
    <div class="two wide field">
    <label><b>Duration:</b></label>
      <select class="ui fluid dropdown" >
        <option value="">0 hour</option>
    <option value="AL">1 hour</option>
    <option value="AK">2 hours</option>
    <option value="DE">3 hours</option>
    <option value="DC">4 hours</option>
    
      </select>
    </div>

    <div class="two wide field">
    <select class="ui fluid dropdown">
    <option value="AL">10 minutes</option>
    <option value="AK">15 minutes</option>
    <option value="DE">20 minutes</option>
    <option value="DC">30 minutes</option>
    </select>
    </div>
</div>


<div class="inline fields" style={{display:"flex"}} >
  
  
    <div class="ui checkbox">    
      <input type="checkbox" />
      <label>Recurring Meeting&nbsp;&nbsp;</label>
    </div>
  
  <div class="two wide field">
      <label>Time_Zone :</label>
        <select class="ui fluid dropdown">
            <option value="AL">India</option>
            <option value="AK">USA</option>
            <option value="DE">London</option>
            <option value="DC">Canada</option>
        </select>
    </div>

</div><br/>

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>
    
  <label><b>Meeting ID</b></label><br/>
  <div class="inline fields" style={{display:"flex"}}>
    
    <div class="field">
      
        <input type="radio" tabindex="0" name="generate_automatically" />
        <label>Generate Automatically</label>
      
    </div>
    <div class="field" style={{marginLeft:"3cm"}}>
      
        <input type="radio" tabindex="0" name="pmid"/>
        <label>Personal Meeting ID</label>
      
    </div></div><br/>

    <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>


    <label><b>Password</b></label><br/>
    <div class="fields" style={{display:"flex", marginRight:'50em'}}>
     <input type="checkbox" tabindex="0"/>
      <label>&nbsp;Require Meeting Password</label> 
        <input type="text" style={{width:"4cm", marginLeft:"3cm"}} />
        <button data-toggle="tooltip" data-placement="top" title="Please enter the meeting ID password" style={{marginLeft:"0.3cm"}}>
        <i class="question circle outline icon"></i>
          </button>      
     </div><br/> 

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

  <label><b>Video</b></label>
  <div class="inline fields"  style={{display:"flex"}} >
    
    <div class="field">
    <label style={{marginLeft:"0.5cm"}}><b>Host : </b></label>      
        <input type="radio" tabindex="0" name="on"  />
        <label >On</label>    
        <input type="radio" tabindex="0" name="off"/>
        <label >Off</label>
    </div>

    <div class="field">
    <label style={{marginLeft:"1cm"}}><b>Partcipants : </b></label>      
        <input type="radio" ></input>
        <label >On</label>     
        <input type="radio" tabindex="0"/>
        <label>Off</label>   
    </div>
  </div>

  <Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

    <label><b>Calendar</b></label>
  <div class="inline fields" style={{display:"flex"}}>   
    
     
        <input type="radio" tabindex="0" name="Outlook"/>
        <label >Outlook</label>
      
        <input type="radio" tabindex="0" name="google_calendar"/>
        <label >Google Calendar</label>
      
        <input type="radio" style={{marginLeft:"1cm"}}/>
        <label >Other Calendars</label>
     
   
    </div>

<Divider horizontal className="horizontal" style={{borderColor:"whiteSmoke"}}><br/>
    </Divider>

    <label><b>Advanced Options</b></label><br/>
    <div class="grouped fields" >    
     
        <input type="radio" name="fruit" tabindex="0" />
        <label >Enable Waiting Room</label><br/>    
        <input type="radio" name="fruit" tabindex="0" />
        <label style={{marginRight:'20em'}}>Enable join before host</label><br/>    
        <input type="radio" name="fruit" tabindex="0" />
        <label style={{marginRight:'20em'}}>Mute participants upon entry</label><br/>   
        <input type="radio" name="fruit" tabindex="0" class="hidden"/>
        <label style={{marginRight:'20em'}}>Automatically record meeting on the local computer</label>
     
  </div><br/>

    <Button >Schedule</Button>
    <Button  >Cancel</Button>
        </form>
    );
} }


export default ScheduleMeeting;
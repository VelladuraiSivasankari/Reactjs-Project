import React from 'react'
import { Button, Divider, Grid } from 'semantic-ui-react'
import './PersonalMeetingID.css'

const { v4: uuidV4 } = require('uuid')
const newId= uuidV4();

const PersonalMeetingID = () => (
  <>
    <Grid columns={2}>
      <Grid.Column>
        <div className="column-left" style={{paddingTop:"50px"}}>
                     <a href="#active">
                   <i class="black large undo icon" style={{textDecoration:"none"}}></i>
                    </a>&nbsp;&nbsp;&nbsp;&nbsp;                   

                    <Button className="btn-btn" content='Upcoming' ></Button>
                    <Button className="btn-btn" content='Recorded'></Button>&nbsp;&nbsp;&nbsp;&nbsp;

                   <a href="#active">
                   <i class="black large plus square icon" style={{textDecoration:"none"}}></i>
                   </a> <br/> <br/> <br/> 
                
                   <div className="btn-one" verticalAlign='middle'>{newId}<br/>
                    My Personal Meeting ID(PMI) 
                    </div>

        </div>
      </Grid.Column>

      <Grid.Column  className="ui">
        <div className="column-right" style={{marginLeft:"70px", top:"0px"}}>
      <label> <h1>My Personal Meeting ID(PMI)</h1></label><br/>
                   <label>{newId}</label> <br/><br/>

                   <button>Start</button>&nbsp;&nbsp;&nbsp;
                   <button><i class="copy icon"></i>&nbsp;Copy Invitation</button>&nbsp;&nbsp;&nbsp;
                   <button><i class="edit icon"></i>&nbsp;Edit</button><br/><br/>

                   <a href="#active">
                       Hide Meeting Invitation
                   </a>

                   <p>
                       Person A is inviting you to a scheduled Zoom meeting.<br/><br/>

                       Topic: Person A's Personal Meeting Room<br/><br/>

                       Join Meeting Room<br/>
                       http://us04web.zoom.us/j/2307572459<br/><br/>

                       Meeting ID:{newId}<br/><br/>
                       Passcode:8ML4eV

                   </p> 
                   </div>
      </Grid.Column >
    </Grid>

    <Divider vertical className="vl" ></Divider> 
    
  </>
)

export default PersonalMeetingID
import React, {useState} from "react";
import './Footer.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';


const Footer=()=>{

    const [audioMuted, setAudioMuted] = useState(false)
    const [videoMuted, setVideoMuted] = useState(false)
    return(
     
      <div className="container">
        
         
        <footer className="footer is-primary">
                <div className="column has-text-right">
                  <button className="btn btn-danger dropdown-toggle"  href="#active" onClick={()=>setAudioMuted(!audioMuted)}>
                  {audioMuted ? <i class="big microphone icon"></i> : <i class="big microphone slash icon"></i>}<br/>
                   {/*<DropdownButton alignRight title="Mute" >                    
                  <Dropdown.Item className="dropdown-item" eventKey="option-1">Headset Microphone</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-2">Same as system</Dropdown.Item>
                  <Dropdown.Divider horizontal />
                  <Dropdown.Item className="dropdown-item" eventKey="option-3">Speakers</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-5">Headset Earphone</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-6">Same as sytem</Dropdown.Item>
                  <Dropdown.Divider horozontal/>              
                  <Dropdown.Item className="dropdown-item" eventKey="option-7">Test Speaker & Microphone</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-8">Leave Computer Audio </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-9">Audio Settings... </Dropdown.Item> <br/><br/>
                  </DropdownButton>                   */}
                   </button>
                   

                   <button className="btn btn-danger dropdown-toggle"  href="#active" onClick={()=>setVideoMuted(!videoMuted)}>
                  {videoMuted ? <i class="big video icon"></i> : <i class="big video slash icon"></i>}<br/>
                   {/* <DropdownButton alignRight title="Start Video" > 
                   <Dropdown.Item className="dropdown-item" eventKey="option-1"></Dropdown.Item><br/><br/>
                   </DropdownButton> */}
                   </button>

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                    
                    <button className="btn btn-danger dropdown-toggle" href="#active" >
                    <i class="big shield alternate icon"></i><br/>
                   <DropdownButton alignRight title="Security" id="dropdown-menu-align-right" >                    
                  <Dropdown.Item className="dropdown-item" eventKey="option-1">Lock Meeting</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-2">Enable Waiting Room</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="dropdown-item" eventKey="option-3">Share Screen</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-4">Chat</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-5">Rename Themselves</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-6">Unmute Themselves</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-7">Remove Participants</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" eventKey="option-8">Report </Dropdown.Item>
                  <br/><br/>
                  </DropdownButton>
                  </button>

{/* Participant  compponent Starts*/}
    <Popup trigger={<button className="btn btn-danger dropdown-toggle" href="#active">
                    
                 <i class=" big users icon"></i><br/>                   
                   <DropdownButton alignRight title="Participants" > 
                   <Link to="/InviteOthers" className="text1" >
                    <Dropdown.Item className="dropdown-item" eventKey="option-3"  />Invite Others
                   </Link>
                    <br/><br/>
                   </DropdownButton>
                  
                   </button>} position="right center">
            <div> <div class="ui right fixed vertical menu" style={{ width: "8.2cm" }}>
              <div class="item">
              <i class="big sort down icon"></i><span style={{ textAlign: "center", marginLeft: "2.5cm" }}>Participants</span>
              </div>
                </div>
            
            </div>
          </Popup>

{/* Participant  compponent end*/}

 {/* Chatting compponent Starts*/}

          <Popup trigger={
            <button className="btn btn-danger dropdown-toggle" href="#active">

                <i class="big chat icon"></i><br />
              <DropdownButton alignRight title="Chat" >
                <Dropdown.Item className="dropdown-item" eventKey="option-1"></Dropdown.Item><br /><br />
              </DropdownButton>

            </button>} position="right center">
            <div class="ui right fixed vertical menu" style={{ width: "8.2cm" }}>
              <div class="item">
              <i class="big sort down icon"></i><span>Chat</span>
              </div>

            </div>
          </Popup>
 {/* Chatting compponent  Ends */}



          <button className="btn btn-danger dropdown-toggle" href="#active">
            <Link to="ShareScreen" style={{ color: "white" }}>
             <i class="big share square icon"></i><br />
              <DropdownButton alignRight title="Share screen" >
                <Dropdown.Item className="dropdown-item" eventKey="option-1">One participant can share at a time</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" eventKey="option-2">Mutiple participants can share simultaneously</Dropdown.Item>
                <Link to="/AdvancedSharingOptions" className="text1" >Advanced sharing options
                    <Dropdown.Item className="dropdown-item" eventKey="option-3" title="Advanced sharing options" />
                </Link> <br /><br />
              </DropdownButton>
            </Link>
          </button>


          <button className="btn btn-danger dropdown-toggle">
          <i class="big bullseye icon"></i>
            <DropdownButton alignRight title="Record">
              <Dropdown.Item className="dropdown-item" eventKey="option-1">Start</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-2">Stop</Dropdown.Item>
              <Dropdown.Item className="dropdown-item" eventKey="option-3">Pause</Dropdown.Item><br /><br />
            </DropdownButton>
          </button>

                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                   <Button className="btn-end" title="End" >
            &nbsp;&nbsp; End &nbsp;&nbsp;
                   </Button>

        </div>
      </footer>
    </div>

  )
}

export default Footer
import React from 'react'
import { Divider,  Checkbox } from 'semantic-ui-react'
import './Settings.css';

const SettingsGeneral = () => (
  <>
  <p><h4>Settings</h4></p>
    <Divider horizontal className="horizontal"><br/>
    </Divider>
    
    <div>
            <a href="SettingsGeneral" style={{textDecoration:"none"}}>
              <i class="cog icon" ></i>&nbsp;
              <span>General</span></a><br/><br/>

              <i class="video icon" ></i>&nbsp;
              <span>Video</span><br/><br/>

              <i class="headphones icon" ></i>&nbsp;
              <span>Audio</span><br/><br/>

              <i class="share sqaure icon" ></i>&nbsp;
              <span>Share Screen</span><br/><br/>

              <i class="comment icon" ></i>&nbsp;
              <span>Chat</span><br/><br/>

              <i class="filter icon" ></i>&nbsp;
              <span>Background & Filters</span><br/><br/>

              <i class="record icon" ></i>&nbsp;
              <span>Recording   </span><br/><br/>

              <i class="user icon" ></i>&nbsp;
              <span>Profile   </span><br/><br/>

              <i class="chart bar outline icon" ></i>&nbsp;
              <span>Statistics   </span><br/><br/>

              <i class="keyboard icon" ></i>&nbsp;
              <span>Keyboard Shortcuts   </span><br/><br/>

              <i class="user alt icon" ></i>&nbsp;
              <span>Accessibility  </span><br/><br/>
    </div>  
   
    <div className="checkbox-new">
      <Checkbox className="checkbox" label='Start Zoom when I start Windows' ></Checkbox>
      <Checkbox label='When closed, minimize window to the notification are instead of the task bar' ></Checkbox>
      <Checkbox label='Use dual monitors' ></Checkbox>
      <Checkbox label='Enter full screen automatically when starting or joining a meeting' ></Checkbox>
      <Checkbox label='Automatically copy invite linnk once the meeting starts' ></Checkbox>
      <Checkbox label='Always show meeting controls' ></Checkbox>
      <Checkbox label='Always show meeting controls' ></Checkbox>
      <Checkbox label='Ask me to confirm when I leave a meeting'></Checkbox>
      <Checkbox label='Show my connected time'></Checkbox>
      <Checkbox label='Remind me 5 minutes before my upcoming meetings'></Checkbox>
      <Checkbox label='Stop my video when my display is off or screen saver begins'></Checkbox>
      <Checkbox label='integrate Zoom with outlook'></Checkbox>

    </div>
   
  </>
)

export default SettingsGeneral
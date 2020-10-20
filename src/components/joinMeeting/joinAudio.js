import React from 'react';



const joinAudio=()=> {
  return (
    <form>
        <center>
        <div>
        <button class="ui primary button" style={{marginTop:'20em'}}>Join Audio by Computer</button><br/><br/><br/>
            <a href ="/computeraudio" >
              Test Computer Audio</a>
        </div>

        <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>Automatically join audio by Computer when joining a meeting</label>
    </div>
  </div>
  </center>
  
    </form>
 
  );
}

export default joinAudio;
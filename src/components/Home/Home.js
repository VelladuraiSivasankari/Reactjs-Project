import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


const Home=()=> {

  return (
    <form>
        <div className="App">
            <Link to="/joinmeeting"><button class="ui primary button"style={{width:'15em'}}>Join a Meeting</button><br/></Link>
            <Link to="/signin"><button class="ui button" style={{width:'15em'}}>Sign In</button></Link>
        </div>
  
    </form>
 
  );
}

export default Home;
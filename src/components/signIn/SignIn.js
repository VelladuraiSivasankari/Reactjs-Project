import React from 'react';
import './signin.css';


class SignIn extends React.Component{

    render(){
        return(
            <form className="sign">
            <div class="ui two column very relaxed stackable grid">
              <div class="column">
                <h1>Sign In</h1>
                 
                
                    <div class="ui left icon input">
                      <input type="text" placeholder="Email"/>
                      <i class="envelope icon"></i>
                    </div><br/>
                  
                    <button class="signup">SignUp with Fujitsu Details</button>
                    <div class="ui left icon input">
                      <input type="password" placeholder="password"/>
                      <i class="lock icon"></i>
                    </div><br/><br/>
                
                  <div class="ui primary button">Login</div>
                  
                
              </div>
              </div>
             {/* <div class="middle aligned column">
      <div class="signup">
        <i class="signup icon"></i>
        Sign Up
      </div>
        </div>*/}

  <div class="ui vertical divider">
    Or
  </div>

         
          </form>

        
        );


}
}

export default SignIn;
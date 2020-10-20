import React from 'react';



class SignUp extends React.Component{

    render(){
        return(
          <form class="ui form" style={{marginLeft:'45em'}}>
            <h1>Sign Up</h1>
  <div class="three wide field">
    <label>Email</label>
    <input type="email" name="email" placeholder="Enter your Email"/>
  </div>
  <div class="three wide field">
    <label>Password</label>
    <input type="password" name="password" placeholder="Enter your password"/>
  </div>
  <button class="ui primary button" type="submit">SignUp</button>
</form>
        );


}
}

export default SignUp;
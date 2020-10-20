import React from 'react';

class shareScreen extends React.Component{

    render(){
        return(

            <form class="ui form" style={{marginLeft:'45em'}}>
            <h1>Share Screen</h1>
                <div class="three wide field">
                    <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your Email"/>
                </div>

                
                <button class="ui primary button" type="submit">Share</button>
                <button class="ui button" type="submit">Cancel</button>
            </form>


        );
    }
}

export default shareScreen;
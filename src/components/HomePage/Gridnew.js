import React, { Component } from 'react'
import {  Grid, Image } from 'semantic-ui-react'

class Gridnew extends Component { 

  render() {
    return(
       
      
      <Grid columns={2} centered padded style={{paddingTop:"450px"}}>   
   
        <Image.Group>
        <div class="column-one" >
    <a class="item" href="newmeeting" style={{textDecoration:'none'}}>
  <i class="orange huge video icon"></i><br/>
    New meeting
  </a>
  </div>
    
  <div class="column-one">
    <a class="item" href="newmeeting" style={{textDecoration:'none'}}>
  <i class="blue huge plus square icon"></i><br/>
    join
  </a>
  </div>
        </ Image.Group >
       
        <Image.Group>
        <div class="column-one">
    <a class="item" href="newmeeting" style={{textDecoration:'none'}}>
  <i class="blue huge calendar icon" ></i><br/>
    Schedule
  </a>
  </div>
    
  <div class="column-one">
    <a class="item" href="newmeeting" style={{textDecoration:'none'}}>
  <i class="blue huge share square icon"></i><br/>
    Share screen
  </a>
  </div>
        </Image.Group>     
        </Grid>   
       
        
   
    );
    
  }
}

export default Gridnew;
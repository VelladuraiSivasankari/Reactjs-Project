import React from 'react';
import Icons from './Icons';
import Footer from './Footer';


class meetingDetails extends React.Component{
    render(){
        return(
        <>    
         <div className="row">
            <label className="label"> meeting topic   </label>
            <label className="label-new"> : abcd</label><br/>
            
            <label className="label"> Host </label>
            <label className="label-new-new">: 12345</label><br/>

            <label className="label"> Password  </label>
            <label className="label-label"> : 2w5sg</label><br/>
            
            <label className="label"> Numeric Password  </label>
            <label className="label-label-new"> : 143213</label><br/>
            <label className="label">(Telephone/Room Systems)</label>
             <br/>
            
            <label className="label"> Invite Link </label>
            <label className="new-label">: http:skdfkj.com</label><br/>
            <a className="label-1" href="#copy url">copy url</a>
            
         </div>
    
        <Icons />
        <Footer />
    </>
        );
        
    }
}

export default meetingDetails;


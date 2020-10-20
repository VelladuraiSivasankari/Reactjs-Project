import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/HomePage/Navbar';
import Gridnew from './components/HomePage/Gridnew';
import Settings from './components/HomePage/Settings';
import SettingsGeneral from './components/HomePage/SettingsGeneral';
import PersonalMeetingID from './components/PersonalMeetingID/PersonalMeetingID';
import joinMeeting from './components/joinMeeting/joinMeeting';
import joinAudio from './components/joinMeeting/joinAudio';
import scheduleMeeting from './components/scheduleMeeting/scheduleMeeting';
import Home from './components/Home/Home';
import ShareScreen from './components/sharescreen/ShareScreen';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import Footer from './components/Footer/Footer';
import meetingDetails from './components/Footer/meetingDetails';
import Icons from './components/Footer/Icons';

const App=()=>{
    return(
    <BrowserRouter>
    <div className="container">
        <Switch>                       
            <Route exact path="/Navbar" component={Navbar} />
            <Route exact path="/Gridnew" component={Gridnew} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/SettingsGeneral" component={SettingsGeneral} />
            <Route exact path="/PersonalMeetingID" component={PersonalMeetingID} />
            <Route exact path="/joinMeeting" component={joinMeeting} />
            <Route exact path="/scheduleMeeting" component={scheduleMeeting} />
            <Route exact path="/joinAudio" component={joinAudio} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/ShareScreen" component={ShareScreen}/>
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Footer" component={Footer} />
            <Route exact path="/meetingDetails" component={meetingDetails} />
            <Route exact path="/Icons" component={Icons} />
        </Switch>
    </div>   
    
    </BrowserRouter>
    );
}

export default App



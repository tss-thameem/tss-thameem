import React from 'react'
import UserGreeting from './FirstFunct';
import GuestGreeting from './SecondFunct'



 export default function Greeting(props) {
const isLoggedIn= props.isLoggedIn;
if (isLoggedIn) {
    return  <UserGreeting/>
}
{
        return <GuestGreeting/>
    
}
}

import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../imgs/profile_image.jpeg';
import Social from '../components/Social';
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="Profile"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Marina Mendes','I am a software developer']} speed={100} eraseDelay={700}/>
                <Social />
            </div>
        )
    }
}
export default Home
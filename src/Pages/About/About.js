import React from 'react';
import nazmul from '../../images/NazmuL.jpg'

const About = () => {
    return (
        <div className='container text-center'>
            <h2 className='my-5'>About Me</h2>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-50' src={nazmul} alt="" />
                </div>
                <div className='col-8'>
                    <h4>My Goal</h4>
                    <p>Hey, I'm Md. Najmul Hossen. I'm a student. Lets talk about my dream or goal: In 2022 i'm fully focusing to learn Web Development and new new technology which is related to web dev. After learning successfully i have a dream to get a job in a big company like amazon, google or any big company in foreign country.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Blogs</h2>
            <div className='mt-3'>
                <div className='border border-success p-3 rounded'>
                    <h2>Difference between authorization and authentication?</h2>
                    <p>Ans: Authentication is like who is trying to access something giving his identity or verify his identity is authentication. Where authorization is after verify the user identity give him access to do something like access secret file and secret route etc.</p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Ans: I'm using firebase for implement authentication system for my website also for hosting my site. It provide me some authentication process like email and password signin or create user also google, github, apple, microsoft, facebook etc authentication services. Here is some alternative of firebase : Auth0, Okta, JSOn Web token, Keycloak, MongoDB etc.</p>
                </div>
                <div className='border border-success p-3 rounded mt-3'>
                    <h2>What other services does firebase provide other than authentication?</h2>
                    <p>Ans: Firebase offer lot of services like: Authentication, Hosting, Storage, Database, Analytics, Function, ML kit, Test lab, Cloud messaging, A/B Testing. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
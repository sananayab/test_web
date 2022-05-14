import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className= 'profile-container'>
        <div className= 'profile-parent'>
            <div className= 'profile-details'>
                <div className= 'colz'>
                    <div className='colz-icon'>
                    <a href="https://www.facebook.com/profile.php?id=100008439577139">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sana-nayyab-0b231b171/">
                        <i className='fa fa-linkedin-square'></i>
                        
                    </a>
                    <a href="#">
                        <i className='fa fa-instagram'></i>
                        
                    </a>
                    <a href="#">
                        <i className='fa fa-twitter'></i>  
                    </a>
                    </div>
                    </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Sana</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Ethusiastic Dev🔴",
                                1000,
                                "Full stack Developer💻",
                                1000,
                                "UI/UX Designer📲",
                                1000,
                                "Cross Platform Dev🌐",
                                1000,
                                "React/React Native Dev📱",
                                1000,
                                "Mern stack Dev👩‍💻",
                                1000,
                                "Web Architecture ⌨️ ",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                         knack of building application with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                 <button className='btn primary-btn'>
                     {" "}
                     Hire Me{" "}
                 </button>
                 <a href='sanacv.pdf' download='Ehidu sanacv.pdf'>
                     <button className='btn highlighted-btn '>Get Resume
                     </button>
                 </a>
                </div>
                
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div> 
    </div>
  );
}

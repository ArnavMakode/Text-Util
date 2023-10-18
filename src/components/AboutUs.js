import React from 'react';

const AboutUs = ({theme}) => {
    const pageStyle = {
        color: theme === 'light'? '#333' : '#ddd',
        margin: "10px",
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };
    return (
        <div className="about-us-container" style={pageStyle}>
            <h1>Hello, I'm Arnav Makode</h1>
            <h6>
            I am a dedicated and passionate software developer with expertise in Java, SQL, HTML, CSS, JavaScript, and React. My journey in the world of coding has equipped me with strong problem-solving abilities and a deep understanding of web technologies. I have completed various projects that demonstrate my skills in creating dynamic and user-friendly web applications.
            </h6> 
            <h2>What I Offer:</h2>
            <ul>
                <li>Proficiency in Java, SQL, HTML, CSS, JavaScript, and React</li>
                <li>Experience in building responsive and intuitive user interfaces</li>
                <li>Problem-solving skills and algorithm development</li>
                <li>Passion for creating innovative and impactful software solutions</li>
            </ul>
            <h2>Let's Connect!</h2>
            <h6>
            Thank you for visiting my profile. I am open to new opportunities and collaborations. If you have a project or an idea that requires technical expertise, feel free to reach out. You can explore my projects on <a href="https://github.com/ArnavMakode" target='blank'>my github profile</a> and contact me on <a href="https://www.linkedin.com/in/arnav-makode-050b14197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>linkedin</a>. Let's work together to create exceptional digital experiences!
            </h6>
        </div>
    );
};

export default AboutUs;

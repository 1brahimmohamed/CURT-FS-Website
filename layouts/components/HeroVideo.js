const HeroVideo = ({videoSrc, ...props}) => {


    const videoStyle = {
        width: '100%',
        height: 'auto', // Adjust the height as needed
        position: 'relative',
        opacity: '0.3',
    };

    const textOverlayStyle = {
        position: 'absolute',
        top: '40%', // Adjust vertical position
        left: '50%', // Adjust horizontal position
        transform: 'translate(-50%, -50%)', // Center the text
        fontSize: '45px', // Adjust the font size
        color: 'white', // Text color
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a shadow for better visibility
    };

    const subtitleStyle = {
        position: 'absolute',
        top: '48%', // Adjust vertical position
        left: '50%', // Adjust horizontal position
        transform: 'translateX(-50%)', // Center horizontally
        fontSize: '30px', // Adjust the font size
        fontWeight: 'bold',
        color: 'white', // Text color
    };

    return (
        <div style={{position: "relative"}}>
            <video autoPlay loop muted playsInline
                   className={`col-12 ${props}`}
                   style={videoStyle}>

                <source src={videoSrc} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div style={textOverlayStyle} className={"section-title"}>CAIRO UNIVERSITY RACING TEAM</div>
            <div style={subtitleStyle}>Formula Student</div>
        </div>
    )
};

export default HeroVideo;

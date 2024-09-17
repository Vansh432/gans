function Features() {
    const content=[
        {
            "title": "Real-Time Vehicle Tracking",
            "description": "Experience precise tracking of your vehicle's location using our advanced GPS antenna. The system updates your vehicle's location every 10 seconds when in motion and ensures constant connectivity during idle periods.",
            "isView": true
        },
        {
            "title": "Comprehensive Daily Metrics",
            "description": "Access a detailed summary of your vehicle’s daily performance, including metrics such as Run Time, Idle Time, Stoppage Time, Distance Traveled, Average Speed, and Maximum Speed. All statistics are available on a daily basis for thorough analysis.",
            "isView": false
        },
        {
            "title": "Interactive Graphical Reports",
            "description": "View graphical representations of your vehicle’s data in the Analytics section. Easily modify the date range using the calendar tool available at the top of the report section for tailored insights.",
            "isView": true
        },
        {
            "title": "Detailed Historical Playback",
            "description": "Analyze your vehicle’s past driving activities with detailed playback history, including stoppages, speed variations, and runtime analysis. This feature allows you to stay informed about your vehicle’s performance and activities.",
            "isView": false
        },
        {
            "title": "Access to Historical Data",
            "description": "Retrieve your vehicle’s historical data at any time with ease using our state-of-the-art mobile application. This feature ensures that you can access past records and insights whenever needed.",
            "isView": true
        },
        {
            "title": "Geofencing Alerts",
            "description": "Set up geofences around specific areas to receive alerts when your vehicle enters or exits these zones. This feature helps you keep track of your vehicle's movements within designated areas and enhances security.",
            "isView": false
        },
        {
            "title": "Immediate Antitheft Notifications",
            "description": "Receive instant alerts if your vehicle is suspected of being tampered with or moved without authorization. Our antitheft alarm system provides real-time notifications to keep your vehicle secure.",
            "isView": true
        },
        {
            "title": "Device Sharing Capabilities",
            "description": "Easily share access to your tracking device with multiple users for a specified duration. You can also create public links to allow others to view your vehicle’s activity without requiring direct access to the device.",
            "isView": false
        },
        {
            "title": "Voice Monitoring Functionality",
            "description": "Utilize voice monitoring features to listen in on your vehicle's environment. Share access to multiple users with time-limited permissions or use a public link to enable anyone to view the vehicle's audio data.",
            "isView": true
        }
    ];
    
    
    return (
        <>
            <div className="mt-[120px] text-center">
                <h1 className="text-[1.8rem] font-bold">Real-Time GPS Asset Tracking</h1>
                <p className="text-[.9rem]">Our GPS tracking system lets you manage your assets remotely, giving you peace of mind.</p>
            {content.map((element)=>{
              return <>
               <div className={`relative flex ${element.isView?'':"flex-row-reverse"} justify-around mt-[50px]`}>
                
                <div className="w-[50%]  text-left flex justify-center items-center">
                    <div>
                <h1 className="text-xl font-semibold   leading-[50px] text-[#26848E]"  style={{fontSize:"2.5rem"}}>{element.title}</h1>
                <p className="mt-[25px] text-[.9rem] leading-[28px]">{element.description}</p>
                </div>
                </div>
                <div className="mt-4 w-[50%]" style={{perspective:"100em"}}>
                    <video className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-[10px]"
                        src="https://www.onelap.in/assets/gifs/Playback%20history.mp4"
                        
                        controls
                        style={{
                            position: "relative",
                            width: "60%",
                            height: "450px",
                            margin: "auto",
                            background:"transparent",
                            transformStyle:"preserve-3d",
                            transform:element.isView?"rotate3d(0, 10, -3, -20deg)":"rotate3d(0, 10, -3, 15deg)"
                        }}
                    />
                </div>
            </div>
              </>
            })}
               
            </div>
        </>
    );
}

export default Features;

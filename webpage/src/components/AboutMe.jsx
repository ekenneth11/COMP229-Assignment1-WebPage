import Header from "./Header";
import me from '../assets/me.jpg'
import './aboutme.css'
import resume from '../assets/KennethBautistaResume.pdf'
function AboutMe(){
    return(
        <>
            <Header />
            <h1 className="title">I'm Kenneth.</h1>
            <div className="aboutMe-content">
                <div>
                    <img src={me} alt="Me" className="meImage" />
                </div>
                
                <div className="description"> 
                    <p> I am a Computer Science graduate specializing in Health Informatics. 
                    My goal is to bridge the gap between complex technology and patient care 
                    by building efficient, secure, and user-friendly systems. I am currently 
                    seeking opportunities to apply my skills in full-stack development and data analysis.
                    </p>
                    <a href={resume} target="_blank" className="download-button">Download Resume <span classname="arrow">↓</span></a>
                </div>

            </div>
            
        </>
    )

}

export default AboutMe;
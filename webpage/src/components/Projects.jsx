import Header from "./Header";
import photo1 from '../assets/air-tier.png'
import photo2 from '../assets/webpage.png'
import photo3 from '../assets/resumatch.png'
import './projects.css'
import RowComponent from "./RowComponent";
const data = [
    {
        imagePath: photo1,
        title: 'Air-Tier Management System',
        text: 'A comprehensive desktop application built with C# and Windows Forms (.NET). Designed to streamline administrative tasks, it features a secure login system and real-time connectivity to an Oracle database for efficient data management and retrieval.'
    },
    {
        imagePath: photo2,
        title: 'Webpage Prototype',
        text: 'A modern, fully responsive website prototype crafted with HTML5 and CSS3. Focused on clean UI/UX design principles, this project demonstrates mobile-first development, smooth navigation, and interactive layouts that adapt perfectly to any screen size.'
    },
    {
        imagePath: photo3,
        title: 'ResuMatch ',
        text: 'An intelligent resume analysis tool designed to bridge the gap between candidates and recruiters. Built using Object-Oriented Programming (OOP), it parses text to match candidate skills against job requirements, streamlining the hiring process.'
    }
]
function Projects(){
    return(
        <>
        <Header/>
        <h1 className="title">Projects</h1>
        <div className="projects">
            {
                data.map((rowItem, index)=>(
                    <RowComponent key={index} item={rowItem}/>
                ))
            }
        </div>
        </>
    )
}

export default Projects;
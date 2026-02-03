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
        text: 'First'
    },
    {
        imagePath: photo2,
        title: 'Webpage Prototype',
        text: 'Second'
    },
    {
        imagePath: photo3,
        title: 'ResuMatch ',
        text: 'Third'
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
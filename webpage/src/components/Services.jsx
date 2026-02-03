import Header from "./Header";
import RowComponent from "./RowComponent";
const photo1 = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
const photo2 = 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'
const photo3 = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80'
import './projects.css'

const data = [
    {
        imagePath: photo1,
        title: 'General Programming',
        text: "Robust desktop application development using C# and .NET frameworks.Specializing in object-oriented design, Windows Forms, and creating efficient, scalable software solutions for business needs."
    },
    {
        imagePath: photo2,
        title: 'Web Development',
        text: " Designing responsive, modern websites using HTML5 and CSS3. Focusing on user-friendly interfaces (UI/UX) that look perfect on both desktop monitors and mobile devices."
    },
    {
        imagePath: photo3,
        title: 'Database & Health Informatics',
        text: "Expert management of Oracle Databases and SQL systems. Bridging the gap between technology and healthcare by structuring complex medical data into secure, organized, and accessible formats."
    }
]
function Services(){
    return(
        <>
        <Header/>
        <h1 className="title">Services</h1>
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

export default Services;
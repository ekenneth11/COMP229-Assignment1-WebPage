// import Header from "../Header";
// import photo1 from '../assets/air-tier.png'
// import photo2 from '../assets/webpage.png'
// import photo3 from '../assets/resumatch.png'
// import '../cssFiles/projects.css'
// import RowComponent from "../RowComponent";
// const data = [
//     {
//         imagePath: photo1,
//         title: 'Air-Tier Management System',
//         text: 'A comprehensive desktop application built with C# and Windows Forms (.NET). Designed to streamline administrative tasks, it features a secure login system and real-time connectivity to an Oracle database for efficient data management and retrieval.'
//     },
//     {
//         imagePath: photo2,
//         title: 'Webpage Prototype',
//         text: 'A modern, fully responsive website prototype crafted with HTML5 and CSS3. Focused on clean UI/UX design principles, this project demonstrates mobile-first development, smooth navigation, and interactive layouts that adapt perfectly to any screen size.'
//     },
//     {
//         imagePath: photo3,
//         title: 'ResuMatch ',
//         text: 'An intelligent resume analysis tool designed to bridge the gap between candidates and recruiters. Built using Object-Oriented Programming (OOP), it parses text to match candidate skills against job requirements, streamlining the hiring process.'
//     }
// ]
import CreateProject from "./CreateProject";
import { useState, useEffect } from "react";
import { list } from "../../datasource/api-projects";
import ProjectCards from "./ProjectCards";

function Projects(){
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectList, setProjectList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // Fetch projects from the API when the component mounts
    const loadProjects = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setProjectList(res.data);
                    // setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };
    const handleRemove = () => {
        loadProjects();
    }
    const handleEdit = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    }
    
    // Call loadProjects when the component mounts
    useEffect(() => {
        loadProjects();
    }, []);

    return(
        <>
            <div className="d-flex align-items-center mb-3 justify-content-center">
                <h1 className="title me-3">Projects</h1>
                <button class="btn" type="button" onClick={() => setShowModal(true)}>
                    <i class="bi bi-plus-circle fs-1"></i>
                </button>
                <CreateProject
                    show={showModal}
                    onHide={() => { setShowModal(false); setSelectedProject(null); }}
                    onSaved={() => { setShowModal(false); setSelectedProject(null); loadProjects(); }}
                    project={selectedProject}
                />
            </div>
                <div className="container-fluid px-3">
                    <div className="row g-2 justify-content-center">
                        {projectList.map((project) => (
                            <div className="col-12 col-md-4 d-flex justify-content-center" key={project.id}>
                                <ProjectCards project={project} onRemove={handleRemove} onEdit={handleEdit} />
                            </div>
                            
                        ))}
                    </div>
                </div>
            {/* <div className="d-flex align-items-center mb-3 justify-content-center">
                <h1 className="title me-3">Projects</h1>

                <button class="btn" type="button" onClick={handleAdd}>
                    <i class="bi bi-plus-circle fs-1"></i>
                </button>
            </div>
            <CreateProject 
                show={showForm}
                onHide = {() => setShowForm(false)}
                project={selectedProject}
            /> */}
        {/* <div className="projects">
            {
                data.map((rowItem, index)=>(
                    <RowComponent key={index} item={rowItem}/>
                ))
            }
        </div> */}
        </>
    )
}

export default Projects;
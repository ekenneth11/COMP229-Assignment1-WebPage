import ProjectModel from "../../datasource/projectModel";
import ProjectForm from "./ProjectForm";
import { useState } from "react";
import { create } from "../../datasource/api-projects"
// import { useNavigate } from "react-router-dom";
function CreateProject({show, onHide}){
    // const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProject((formData) => ({...formData, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + project);

        create(project)
            .then((res) =>{
                if(res.success) {
                    alert(res.message + " - id: " + res.data.id);
                }
                else{
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    }   
    return (
        <>
            <ProjectForm 
            show={show} 
            onHide={onHide} 
            project={new ProjectModel()} 
            title="Add New Project"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
        </>

    )
}

export default CreateProject;
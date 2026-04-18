import ProjectModel from "../../datasource/projectModel";
import ProjectForm from "./ProjectForm";
import { useState, useEffect } from "react";
import { create, update } from "../../datasource/api-projects"
import { getUsername } from "../auth/auth-helper";
// import { useNavigate } from "react-router-dom";
function CreateProject({show, onHide, onSaved, project: incomingProject}){
    // const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // when incoming project changes (edit or add), set local state
        if (incomingProject) {
            setProject({ ...incomingProject });
        } else {
            setProject(new ProjectModel());
        }
    }, [incomingProject, show]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProject((formData) => ({...formData, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + project);

        const currentUsername = getUsername();
        console.log("[CreateProject] currentUsername:", currentUsername);
        
        const isNewProject = !project.id;
        const payload = isNewProject
            ? {
                ...project,
                owner: currentUsername || ""  // Always set owner to current user for new projects
            }
            : project;

        console.log("[CreateProject] isNewProject:", isNewProject, "payload.owner:", payload.owner);

        const doCreateOrUpdate = isNewProject ? create(payload) : update(payload, project.id);
        doCreateOrUpdate
            .then((res) =>{
                console.log("[CreateProject] API Response:", res);
                if(res && res.success) {
                    console.log("[CreateProject] Created project data:", res.data);
                    alert(res.message + (res.data && res.data.id ? " - id: " + res.data.id : ""));
                    setProject(new ProjectModel());
                    if (onSaved) onSaved();
                }
                else{
                    alert(res ? res.message : 'Unknown response');
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
                
            })
    }   
    const handleCancel = () => {
        setProject(new ProjectModel());
        if (onHide) onHide();
    }
    return (
        <>
            <ProjectForm
                show={show}
                onHide={handleCancel}
                project={project}
                title="Project"
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </>

    )
}

export default CreateProject;
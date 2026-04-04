
import { remove } from "../../datasource/api-projects";
import "../../cssFiles/projects-cards.css";

function ProjectCards({ project, onRemove, onEdit }) {
    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            remove(id)
                .then((res) => {
                    if (res && res.success) {
                        onRemove();
                    } else {
                        alert(res ? res.message : 'Unknown response');
                    }
                })
                .catch((err) => {
                    alert(err.message || err);
                    console.log(err);
                });
        }
    };

    return (
        <div className="card projects-grid-card h-100 w-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title projects-card-title">{project.title || "Untitled Project"}</h5>
                <h6 className="projects-card-date">
                    {project.completion ? new Date(project.completion).toLocaleDateString() : "No completion date"}
                </h6>
                <p className="projects-card-description">{project.description || "No description provided"}</p>
                <div className="projects-actions mt-auto d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-secondary me-3"
                        onClick={() => onEdit && onEdit(project)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(project.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;

import { remove } from "../../datasource/api-projects";

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
        <div className="card project-card h-100 w-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle mb-2">{project.completion ? new Date(project.completion).toLocaleDateString() : ''}</h6>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center mt-3">
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
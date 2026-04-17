
import { remove } from "../../datasource/api-projects";
import "../../cssFiles/projects-cards.css";

function ProjectCards({ project, currentUser, onRemove, onEdit }) {
    const ownerKeyCandidates = [
        "createdBy",
        "createdByUsername",
        "creator",
        "author",
        "owner",
        "ownerUsername",
        "username",
        "userName",
        "addedBy",
        "userId",
        "ownerId",
        "createdById",
        "uid",
        "email"
    ];

    const projectOwner = ownerKeyCandidates
        .map((key) => project?.[key])
        .find((value) => value !== undefined && value !== null && String(value).trim() !== "");

    const isOwner = Boolean(
        projectOwner &&
        currentUser?.ownerCandidates?.includes(String(projectOwner).toLowerCase())
    );

    const actionDisabled = !isOwner;

    const handleRemove = (id) => {
        if (actionDisabled) {
            return;
        }

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
                        disabled={actionDisabled}
                        title={actionDisabled ? "Only the user who added this project can edit it." : "Edit project"}
                        onClick={() => !actionDisabled && onEdit && onEdit(project)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        disabled={actionDisabled}
                        title={actionDisabled ? "Only the user who added this project can delete it." : "Delete project"}
                        onClick={() => handleRemove(project.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;
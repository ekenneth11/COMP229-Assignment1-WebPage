
import { remove } from "../../datasource/api-references";

function ReferenceCards({ reference, currentUsername, currentUserEmail, onRemove, onEdit }) {
    const owner = reference?.owner;
    const ownerEmail = owner?.email || "";
    const ownerUsername = owner?.username || "";

    const emailMatch = Boolean(
        ownerEmail &&
        currentUserEmail &&
        String(ownerEmail).trim().toLowerCase() === String(currentUserEmail).trim().toLowerCase()
    );

    const usernameMatch = Boolean(
        ownerUsername &&
        currentUsername &&
        String(ownerUsername).trim() === String(currentUsername).trim()
    );

    const isOwner = emailMatch || usernameMatch;
    const actionDisabled = !isOwner;

    const handleRemove = (id) => {
        if (actionDisabled) {
            return;
        }

        if (window.confirm("Are you sure you want to delete this reference?")) {
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
        <div className="card references-grid-card h-100 w-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title references-name">
                    {`${reference.firstName || ""} ${reference.lastName || ""}`.trim() || "Unnamed Reference"}
                </h5>
                <h6 className="card-subtitle references-role">{reference.position || "No Position"}</h6>

                <p className="references-detail">
                    <span className="references-detail-label">Company:</span>
                    {reference.company || "Not provided"}
                </p>
                <p className="references-detail">
                    <span className="references-detail-label">Email:</span>
                    {reference.email || "Not provided"}
                </p>

                <div className="references-actions mt-auto d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-secondary me-3"
                        disabled={actionDisabled}
                        title={actionDisabled ? "Only the user who added this reference can edit it." : "Edit reference"}
                        onClick={() => !actionDisabled && onEdit && onEdit(reference)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        disabled={actionDisabled}
                        title={actionDisabled ? "Only the user who added this reference can delete it." : "Delete reference"}
                        onClick={() => handleRemove(reference.id || reference._id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReferenceCards;
import { remove } from "../../datasource/api-services";
import "../../cssFiles/services-cards.css";

function ServiceCards({ service, currentUsername, currentUserEmail, onRemove, onEdit }) {
    const owner = service?.owner;
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

        if (window.confirm("Are you sure you want to delete this service?")) {
            remove(id)
                .then((res) => {
                    if (res && res.success) {
                        onRemove();
                    } else {
                        alert(res ? res.message : "Unknown response");
                    }
                })
                .catch((err) => {
                    alert(err.message || err);
                    console.log(err);
                });
        }
    };

    return (
        <div className="card services-grid-card h-100 w-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title services-card-title">{service.title || "Untitled Service"}</h5>
                <p className="services-card-description">{service.description || "No description provided"}</p>
                <div className="services-actions mt-auto d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-secondary me-3"
                        disabled={actionDisabled}
                        title={actionDisabled ? "Only the user who added this service can edit it." : "Edit service"}
                        onClick={() => !actionDisabled && onEdit && onEdit(service)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        disabled={actionDisabled}
                        title={actionDisabled ? "Only the user who added this service can delete it." : "Delete service"}
                        onClick={() => handleRemove(service.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;

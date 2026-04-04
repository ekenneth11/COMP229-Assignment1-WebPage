import { remove } from "../../datasource/api-services";
import "../../cssFiles/services-cards.css";

function ServiceCards({ service, onRemove, onEdit }) {
    const handleRemove = (id) => {
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
                    <button className="btn btn-secondary me-3" onClick={() => onEdit && onEdit(service)}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleRemove(service.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;

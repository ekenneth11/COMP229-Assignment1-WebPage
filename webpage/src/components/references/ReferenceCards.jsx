
import { remove } from "../../datasource/api-references";

function ReferenceCards({ reference, onRemove, onEdit }) {
    const handleRemove = (id) => {
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
                        onClick={() => onEdit && onEdit(reference)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(reference.id || reference._id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReferenceCards;
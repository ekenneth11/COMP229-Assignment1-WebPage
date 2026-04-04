
import { remove } from "../../datasource/api-users";
import "../../cssFiles/users-cards.css";

function UserCards({ user, onRemove, onEdit }) {
    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
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
        <div className="card users-grid-card h-100 w-100">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title users-card-name">
                    {`${user.firstName || ""} ${user.lastName || ""}`.trim() || user.name || "Unnamed User"}
                </h5>
                <p className="users-card-detail">
                    <span className="users-card-detail-label">Email:</span>
                    {user.email || "Not provided"}
                </p>
                <div className="users-actions mt-auto d-flex justify-content-between align-items-center">
                    <button
                        className="btn btn-secondary me-3"
                        onClick={() => onEdit && onEdit(user)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(user.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCards;
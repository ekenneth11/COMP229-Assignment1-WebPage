
import { remove } from "../../datasource/api-users";

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
        <div className="card user-card h-100 w-100 bg-light border-1 ">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2">{user.email}</h6>
                <p className="card-text">{user.role}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center mt-3">
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
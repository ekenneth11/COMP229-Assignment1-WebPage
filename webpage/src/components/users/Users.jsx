
import { useState, useEffect } from "react";
import { list } from "../../datasource/api-users";
import CreateUser from "./CreateUser";
import UserCards from "./UserCards";

function Users(){
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userList, setUserList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const loadUsers = () =>{
        list()
            .then((res) => {
                if (res.success) {
                    setUserList(res.data);
                    // setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };

    const handleRemove = () => {
        loadUsers();
    }
    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    }
    useEffect(() => {
        loadUsers();
    }, []);
    return (
        <>
            <div className="d-flex align-items-center mb-3 justify-content-center">
                <h1 className="title me-3">Users</h1>
                <button class="btn" type="button" onClick={() => setShowModal(true)}>
                    <i class="bi bi-plus-circle fs-1"></i>
                </button>
                <CreateUser
                    show={showModal}
                    onHide={() => { setShowModal(false); setSelectedUser(null); }}
                    onSaved={() => { setShowModal(false); setSelectedUser(null); loadUsers(); }}
                    user={selectedUser}
                />
            </div>
            <div className="container-fluid px-3">
                <div className="row g-2 justify-content-center">
                    {userList.map((user) => (
                        <div className="col-12 col-md-4 d-flex justify-content-center" key={user.id}>
                            <UserCards user={user} onRemove={handleRemove} onEdit={handleEdit} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Users;
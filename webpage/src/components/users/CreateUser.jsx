
import UserModel from "../../datasource/userModel";
import UserFom from "./UserForm";
import { useState, useEffect, use } from "react";
import {create, update} from "../../datasource/api-users"
function CreateUser({show, onHide, onSaved, user: incomingUser}){ 
    const [user, setUser] = useState(new UserModel());
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser((formData) => ({...formData, [name]:value}));
    }

    useEffect(() => {
        // when incoming project changes (edit or add), set local state
        if (incomingUser) {
            setUser({ ...incomingUser });
        }
    }, [incomingUser, show]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + user);
        // prepare payload with timestamps
        const payload = { ...user };
        const nowIso = new Date().toISOString();
        if (payload.id) {
            // existing user -> set updated timestamp
            payload.updated = nowIso;
        } else {
            // new user -> set created timestamp
            payload.updated = nowIso;
            payload.created = nowIso;
        }

        const doCreateOrUpdate = payload.id ? update(payload, payload.id) : create(payload);
        doCreateOrUpdate
            .then((res) =>{
                if(res && res.success) {
                    alert(res.message + (res.data && res.data.id ? " - id: " + res.data.id : ""));
                    setUser(new UserModel());
                    if (onSaved) onSaved();
                }
                else{
                    alert(res ? res.message : 'Unknown response');
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    }

    const handleCancel = () => {
        setUser(new UserModel());
        if (onHide) onHide();
    }
    return (
        <>
            <UserForm
                show={show}
                onHide={handleCancel}
                user={user}
                title="User"
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </>
    );
}

export default CreateUser;
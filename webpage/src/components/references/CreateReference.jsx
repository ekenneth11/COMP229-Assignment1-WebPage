import ReferenceModel from "../../datasource/referenceModel";
import ReferenceForm from "./ReferenceForm";
import { useState, useEffect } from "react";
import { create, update } from "../../datasource/api-references";
// import { useNavigate } from "react-router-dom";
function CreateReference({show, onHide, onSaved, reference: incomingReference}){
    // const navigate = useNavigate();
    const [reference, setReference] = useState(new ReferenceModel());
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // when incoming reference changes (edit or add), set local state
        if (incomingReference) {
            setReference({ ...incomingReference });
        } else {
            setReference(new ReferenceModel());
        }
    }, [incomingReference, show]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setReference((formData) => ({...formData, [name]:value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:", reference);

        const doCreateOrUpdate = reference.id ? update(reference, reference.id) : create(reference);
        doCreateOrUpdate
            .then((res) =>{
                if(res && res.success) {
                    alert(res.message + (res.data && res.data.id ? " - id: " + res.data.id : ""));
                    setReference(new ReferenceModel());
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
    };
    const handleCancel = () => {
        setReference(new ReferenceModel());
        if (onHide) onHide();
    };
    return (
        <>
            <ReferenceForm
                show={show}
                onHide={handleCancel}
                reference={reference}
                title="Reference"
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </>

    )
}

export default CreateReference;
import ServiceModel from "../../datasource/serviceModel";
import ServiceForm from "./ServiceForm";
import { useState, useEffect } from "react";
import { create, update } from "../../datasource/api-services";

function CreateService({ show, onHide, onSaved, service: incomingService }) {
    const [service, setService] = useState(new ServiceModel());

    useEffect(() => {
        if (incomingService) {
            setService({ ...incomingService });
        } else {
            setService(new ServiceModel());
        }
    }, [incomingService, show]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setService((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const doCreateOrUpdate = service.id ? update(service, service.id) : create(service);
        doCreateOrUpdate
            .then((res) => {
                if (res && res.success) {
                    alert(res.message + (res.data && res.data.id ? " - id: " + res.data.id : ""));
                    setService(new ServiceModel());
                    if (onSaved) onSaved();
                } else {
                    alert(res ? res.message : "Unknown response");
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            });
    };

    const handleCancel = () => {
        setService(new ServiceModel());
        if (onHide) onHide();
    };

    return (
        <ServiceForm
            show={show}
            onHide={handleCancel}
            service={service}
            title="Service"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    );
}

export default CreateService;

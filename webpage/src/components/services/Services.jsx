import { useState, useEffect } from "react";
import { list } from "../../datasource/api-services";
import { getUsername, getUserEmail } from "../auth/auth-helper";
import CreateService from "./CreateService";
import ServiceCards from "./ServiceCards";

function Services() {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [serviceList, setServiceList] = useState([]);
    const currentUsername = getUsername();
    const currentUserEmail = getUserEmail();

    const loadServices = () => {
        list()
            .then((res) => {
                if (res && res.success) {
                    setServiceList(res.data);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            });
    };

    const handleRemove = () => {
        loadServices();
    };

    const handleEdit = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    useEffect(() => {
        loadServices();
    }, []);

    return (
        <>
            <div className="d-flex align-items-center mb-3 justify-content-center">
                <h1 className="title me-3">Services</h1>
                <button className="btn" type="button" onClick={() => setShowModal(true)}>
                    <i className="bi bi-plus-circle fs-1"></i>
                </button>
                <CreateService
                    show={showModal}
                    onHide={() => {
                        setShowModal(false);
                        setSelectedService(null);
                    }}
                    onSaved={() => {
                        setShowModal(false);
                        setSelectedService(null);
                        loadServices();
                    }}
                    service={selectedService}
                />
            </div>
            <div className="container-fluid px-3">
                <div className="row g-2 justify-content-center">
                    {serviceList.map((service) => (
                        <div className="col-12 col-md-4 d-flex justify-content-center" key={service.id}>
                            <ServiceCards
                                service={service}
                                currentUsername={currentUsername}
                                currentUserEmail={currentUserEmail}
                                onRemove={handleRemove}
                                onEdit={handleEdit}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;

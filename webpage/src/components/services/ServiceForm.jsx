function ServiceForm({ show, onHide, service, title, handleSubmit, handleChange }) {
    if (!show) return null;

    return (
        <div
            className="modal d-block"
            style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1050,
            }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form id="serviceForm" className="form" onSubmit={handleSubmit}>
                            <div className="form-floating m-3">
                                <input
                                    id="titleTextField"
                                    name="title"
                                    className="form-control rounded-3"
                                    placeholder="Title"
                                    value={service.title || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="titleTextField">Title</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    id="descriptionTextField"
                                    name="description"
                                    className="form-control rounded-3"
                                    value={service.description || ""}
                                    onChange={handleChange}
                                    placeholder="Description"
                                    required
                                />
                                <label htmlFor="descriptionTextField">Description</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onHide}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" type="submit" form="serviceForm">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceForm;

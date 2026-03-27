
function ProjectForm({ show, onHide, project, title, handleSubmit, handleChange }) {
    if (!show) return null;

    return (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form id="projectForm" className="form" onSubmit={handleSubmit}>
                            <input type='hidden' name='id' value={project.id || ""} />

                            <div className='form-floating m-3'>
                                <input
                                    id='titleTextField'
                                    name='title'
                                    className="form-control rounded-3"
                                    placeholder="Title"
                                    value={project.title || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="titleTextField">Title</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    id='descriptionTextField'
                                    name='description'
                                    className="form-control rounded-3"
                                    value={project.description || ""}
                                    onChange={handleChange}
                                    placeholder='Description'
                                    required
                                />
                                <label htmlFor="descriptionTextField">Description</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    type='date'
                                    className="form-control rounded-3"
                                    id='completionTextField'
                                    name='completion'
                                    value={project.completion ? new Date(project.completion).toISOString().split('T')[0] : ""}
                                    onChange={handleChange}
                                    placeholder='Completion Date' />
                                <label htmlFor="completionTextField">Completion Date</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
                        <button className="btn btn-primary" type='submit' form="projectForm">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectForm;
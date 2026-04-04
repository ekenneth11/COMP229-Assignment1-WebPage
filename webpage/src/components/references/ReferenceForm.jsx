
function ReferenceForm({ show, onHide, reference, title, handleSubmit, handleChange }) {
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
                        <form id="referenceForm" className="form" onSubmit={handleSubmit}>
                            <div className='form-floating m-3'>
                                <input
                                    id='firstNameTextField'
                                    name='firstName'
                                    className="form-control rounded-3"
                                    placeholder="First Name"
                                    value={reference.firstName || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="firstNameTextField">First Name</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    id='lastNameTextField'
                                    name='lastName'
                                    className="form-control rounded-3"
                                    value={reference.lastName || ""}
                                    onChange={handleChange}
                                    placeholder='Last Name'
                                    required
                                />
                                <label htmlFor="lastNameTextField">Last Name</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    type='email'
                                    className="form-control rounded-3"
                                    id='emailTextField'
                                    name='email'
                                    value={reference.email || ""}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    required
                                />
                                <label htmlFor="emailTextField">Email</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    className="form-control rounded-3"
                                    id='positionTextField'
                                    name='position'
                                    value={reference.position || ""}
                                    onChange={handleChange}
                                    placeholder='Position'
                                    required
                                />
                                <label htmlFor="positionTextField">Position</label>
                            </div>
                            <div className="form-floating m-3">
                                <input
                                    className="form-control rounded-3"
                                    id='companyTextField'
                                    name='company'
                                    value={reference.company || ""}
                                    onChange={handleChange}
                                    placeholder='Company'
                                    required
                                />
                                <label htmlFor="companyTextField">Company</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
                        <button className="btn btn-primary" type='submit' form="referenceForm">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferenceForm;
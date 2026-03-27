
function UserForm({show, onHide, user, title, handleSubmit, handleChange}){
    if(!show) return null;
    return (
        <>
            <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={onHide}></button>
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form id="userForm" className="form" onSubmit={handleSubmit}>
                                <input type='hidden' name='id' value={user.id || ""} />
                                {user.id && (
                                    <>
                                        <input type='hidden' name='created' value={user.created || ""} />
                                        <input type='hidden' name='updated' value={user.updated || ""} />
                                    </>
                                )}

                                <div className='form-floating m-3'>
                                    <input
                                        id='firstNameTextField'
                                        name='firstName'
                                        className="form-control rounded-3"
                                        placeholder="First Name"
                                        value={user.firstName || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="firstNameTextField">First Name</label>
                                </div>

                                <div className='form-floating m-3'>
                                    <input
                                        id='lastNameTextField'
                                        name='lastName'
                                        className="form-control rounded-3"
                                        placeholder="Last Name"
                                        value={user.lastName || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="lastNameTextField">Last Name</label>
                                </div>
                                <div className='form-floating m-3'>
                                    <input
                                        id='emailTextField'
                                        name='email'
                                        className="form-control rounded-3"
                                        placeholder="Email"
                                        value={user.email || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="emailTextField">Email</label>
                                </div>
                                <div className='form-floating m-3'>
                                    <input
                                        id='passwordTextField'
                                        name='password'
                                        className="form-control rounded-3"
                                        placeholder="Password"
                                        value={user.password || ""}
                                        onChange={handleChange}
                                        type="password"
                                        required={!user.id} // password is required only for new users
                                    />
                                    <label htmlFor="passwordTextField">Password</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
                            <button className="btn btn-primary" type='submit' form="userForm">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserForm;
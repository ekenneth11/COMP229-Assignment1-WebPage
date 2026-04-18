// import Header from "../Header";
// import photo1 from '../assets/air-tier.png'
// import photo2 from '../assets/webpage.png'
// import photo3 from '../assets/resumatch.png'
// import '../cssFiles/projects.css'
// import RowComponent from "../RowComponent";
// const data = [
//     {
//         imagePath: photo1,
//         title: 'Air-Tier Management System',
//         text: 'A comprehensive desktop application built with C# and Windows Forms (.NET). Designed to streamline administrative tasks, it features a secure login system and real-time connectivity to an Oracle database for efficient data management and retrieval.'
//     },
//     {
//         imagePath: photo2,
//         title: 'Webpage Prototype',
//         text: 'A modern, fully responsive website prototype crafted with HTML5 and CSS3. Focused on clean UI/UX design principles, this project demonstrates mobile-first development, smooth navigation, and interactive layouts that adapt perfectly to any screen size.'
//     },
//     {
//         imagePath: photo3,
//         title: 'ResuMatch ',
//         text: 'An intelligent resume analysis tool designed to bridge the gap between candidates and recruiters. Built using Object-Oriented Programming (OOP), it parses text to match candidate skills against job requirements, streamlining the hiring process.'
//     }
// ]
import CreateReference from "./CreateReference";
import { useState, useEffect } from "react";
import { list } from "../../datasource/api-references";
import { getUsername, getUserEmail } from "../auth/auth-helper";
import ReferenceCards from "./ReferenceCards";
import "../../cssFiles/references.css";

function References(){
    const [showModal, setShowModal] = useState(false);
    const [selectedReference, setSelectedReference] = useState(null);
    const [referenceList, setReferenceList] = useState([]);
    const currentUsername = getUsername();
    const currentUserEmail = getUserEmail();
    // const [isLoading, setIsLoading] = useState(true);

    // Fetch references from the API when the component mounts
    const loadReferences = () => {
        list()
            .then((res) => {
                if (res && res.success) {
                    setReferenceList(res.data);
                    // setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };
    const handleRemove = () => {
        loadReferences();
    };
    const handleEdit = (reference) => {
        setSelectedReference(reference);
        setShowModal(true);
    };
    
    // Call loadReferences when the component mounts
    useEffect(() => {
        loadReferences();
    }, []);

    return(
        <>
            <div className="d-flex align-items-center mb-3 justify-content-center">
                <h1 className="title me-3">References</h1>
                <button className="btn" type="button" onClick={() => setShowModal(true)}>
                    <i className="bi bi-plus-circle fs-1"></i>
                </button>
                <CreateReference
                    show={showModal}
                    onHide={() => { setShowModal(false); setSelectedReference(null); }}
                    onSaved={() => { setShowModal(false); setSelectedReference(null); loadReferences(); }}
                    reference={selectedReference}
                />
            </div>
                <div className="container-fluid px-3">
                    <div className="row g-2 justify-content-center">
                        {referenceList.map((reference, index) => (
                            <div className="col-12 col-md-4 d-flex justify-content-center" key={reference.id || reference._id || reference.email || index}>
                                <ReferenceCards
                                    reference={reference}
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
    )
}

export default References;
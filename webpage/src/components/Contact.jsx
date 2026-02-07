import Header from "./Header";
import contact from '../assets/contact.png'
import './contact.css'
function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Going back to Home...");

        window.location.href = '/';
    }
    return (
        <>
            <Header />
            
            <div className="contact-description">
                <h1>How Can We Help?</h1>
                <p>Contact us to find out how we can help you to bring your ideas to life!</p>
            </div>
            <div className="contact-container">
                <div className="contact-image">
                    <img src={contact} alt="Contact Image" className="img1"/>
                    Email: kennethbautista1512@gmail.com Hello <br></br>Phone: (647) 787-6431
                </div>
                <form onSubmit={handleSubmit} className="details">
                    <input type='text' name='firstName' placeholder="First Name" className="input" />
                    <input type='text' name='LastName' placeholder="Last Name" className="input" />
                    <input type='text' name='email' placeholder="What's your email?" className="input" />
                    <input type='text' name='contact' placeholder="Contact Number" className="input" />
                    <textarea name='message' rows='5' placeholder="Your questions..." className="input" />
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>


        </>
    )
}

export default Contact;
import Header from "./Header";
import contact from '../assets/contact.png'
import './contact.css'
function Contact() {
    const handleSubmit = (e) => {

    }
    return (
        <>
            <Header />
            {/** <div className="contact-header">
                <h1>How Can We Help? </h1>
                <h3>Contact us to find out how we can help you to bring your ideas to life!</h3>
                <div className="rowContent">
                    <form onSubmit={handleSubmit} className="contactForm">
                        <div className="textDiv">
                            <label>First Name: </label>
                            <input type="text" name="firstName" placeholder="Enter Name" className="textBox" required />

                            <label>Last Name: </label>
                            <input type="text" name="lastName" placeholder="Enter Last Name" className="textBox" required />

                            <label>Contact Number: </label>
                            <input type="tel" name="contactNumber" placeholder="(123) 456-7890" className="textBox" maxLength={10} pattern="[0-9]{10}" required />

                            <label>Email: </label>
                            <input type="text" name="email" placeholder="Enter Email" className="textBox" required />
                        </div>
                        <div className="textDiv">
                            <label>Message:</label>
                            <textarea name="message" rows="5" className="messageBox"></textarea>

                            <button type="submit" className="submitButton">Send</button>
                        </div>
                    </form>
                    <div className="details">
                        
                    </div>
                    
                </div>

            </div>*/}
            <div className="contact-description">
                <h1>How Can We Help?</h1>
                <p>Contact us to find out how we can help you to bring your ideas to life!</p>
            </div>
            <div className="contact-container">
                <div className="contact-image">
                    <img src={contact} alt="Contact Image" className="img1"/>
                    Email: adasdasdsa
                    
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
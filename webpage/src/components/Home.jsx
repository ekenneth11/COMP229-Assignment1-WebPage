import Header from "./Header";
import './home.css'
function Home(){
    return(
        <>
            <Header/>
            <div className="homepage">
                <h1>Hi. I'm Kenneth. <br></br>Welcome to my Portfolio</h1>
                <p>Combining technical precision with creative design. 
                    My goal is to build digital experiences that are not only functional 
                    and data-driven but also intuitive and visually engaging.</p>
            </div>
        </>
    )
}

export default Home;
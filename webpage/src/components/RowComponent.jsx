import './rowComponent.css'
function RowComponent({item}){
    return(
    <>
        <div className="row">
            <img alt="Row content" src={item.imagePath} className='image' />
            
            <div className="text-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
    </>
    )
}

export default RowComponent;
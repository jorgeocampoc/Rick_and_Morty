


export const CardCharacter = ({status,name, image, gender, origin,img}) => {
    const rutaImagen = '../assets/alien.jpg';
  return (
    <>
    

      <div >
      <div className="card" >

            <div className="img1" > 
            <img src={img} alt=""  className="card-img-top"/>
            </div>
            <div className="img2" > 
            <img src={image} alt=""  className="card-img-top"/>
            </div>
    
            <div className="main-text">

                <p className="card-text">{name} </p>
                <p className="card-text">{gender} </p>
                <p className="card-text">{status} </p>
                <p className="card-text">{origin} </p>
            </div>
           
           
        </div>
      </div>
    </>
  )
}

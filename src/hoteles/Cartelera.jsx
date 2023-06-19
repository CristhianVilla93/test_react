import "./Cartelera.css"
import "../public/inconos/star.svg"


function Cartelera(props) {
  return (
    <>
      <div className='cartelera'>
        
        <img className='img' src={props.src} alt="alternado" />
        
        <div className='detalles'>
            <div className={props.superHost ?'host': ""}>
                {props.superHost ? "SUPERHOST":""}
            </div>
         
          <div className='mini-detalle1'>
            <h4 className="letra">{props.type} </h4>
            <h4 className="letra">.{props.beds} beds</h4>
          </div>

          <div className='mini-detalle2'>
            <img className='img1' src="src/inconos/star.png" alt="" />
            <h3 className="rating">{props.rating}</h3>
          </div>
        </div>
        <div className='titulo'>
            <h2 className='titulo1'>{props.title}</h2>
        </div>
      </div>
    </>
  );
}

export default Cartelera
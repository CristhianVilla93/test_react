import "./Cartelera.css"



function Cartelera(props) {
  return (
    <>
      <div className='cartelera'>
        
        <img className='img' src={props.src} alt="" />
        
        <div className='detalles'>
            <div className='host'>
                <h3>SUPER HOST</h3>
            </div>
         
          <div className='mini-detalle1'>
            <h4>{props.type}.</h4>
            <h4>{props.beds}.beds</h4>
          </div>

          <div className='mini-detalle2'>
            <img className='img1' src="./" alt="" />
            <h3>{props.rating}</h3>
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
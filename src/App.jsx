import { useEffect, useState } from "react";
import "./App.css";

import Cartelera from "./hoteles/Cartelera";


function App() {
  


  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <section className="total">
        <div className="contenedor-princ">
          <div className="contenedor-sec1">
            <div>
              <img src="src/img/logo.svg" alt="logo" />
            </div>

            <div className="buscador">
              <input className="pais" type="text" />
              <div className="personas">
                <input className="cant-per" type="text" />
                <button className="botoncito"><img src="src/inconos/lupa.svg" className="lupa"/></button>
              </div>
            </div>
          </div>
          <div className="contenedor-sec2">
            <div className="tituprim">
              <h1 className="titulo-conte">Stays in Finland</h1>
              <span>12+ stays</span>
            </div>
            <div className="contenedor-cart">
              {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
              {data.map((el, index) => (
                <>
                  <Cartelera 
                  src={el.photo}
                  type={el.type}
                  beds={el.beds}

                  rating={el.rating}
                  title={el.title}
                  key={index} />
                  
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

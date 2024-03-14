import React from 'react';


function Navbar() {
    return(
        <>
        <div className="navbar">
        <div className="navbar-left">
          <div className="icon i-1">
            <img src="./src/assets/navbar/analitica.png" />
            
          </div>
          <div className="icon i-2"><img src="./src/assets/navbar/plano.png" /></div>
          <div className="icon i-3"><img src="./src/assets/navbar/reserva.png" /></div>
        </div>
        <div className="navbar-middle">
          <div className="icon i-4"><img src="./src/assets/navbar/hogar.png" /></div>
        </div>
        <div className="navbar-right">
          <div className="icon i-5"><img src="./src/assets/navbar/glass.png" />
              <div className="busqueda">
                <p>Buscar Servicios</p>
              </div>
          </div>
          <div className="icon i-6"><img src="./src/assets/navbar/person.png" /></div>
        </div>
      </div>
        </>
    );
}

export default Navbar;
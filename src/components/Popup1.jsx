import React from "react";
import { Html } from "@react-three/drei";

const PopUp = ({ position, visible, onClose }) => {
  return (
    <Html position={position} center>
      {visible && (
        <div  className="Container-popup" style={{  padding: "40px" }}>
          <h2>LEGO ROOM</h2>
          <form>
            <div className="fecha v-m">
              <label for="fecha">Fecha:</label>
              <input type="date" id="fecha" v-model="fecha" />
            </div>
            <div className="horas v-m">
              <div className="hora">
              <label for="hora">Hora Inicio:</label>
              <input type="time" id="hora" v-model="hora"/>
              </div>
              <div className="hora">
              <label for="hora">Hora Final:</label>
              <input type="time" id="hora" v-model="hora"/>
              </div>
            </div>
            <div className="gadgets v-m">
              <div className="Individual-gadget">
              <label for="cantidad">Macbook pro</label>
              <img src="./src/assets/Gadgets/macbook.png" />
              
              <input type="number" id="cantidad" v-model="cantidad" />
              </div>
              <div className="Individual-gadget">
              <label for="cantidad">Apple Vision pro</label>
              <img src="./src/assets/Gadgets/vision_pro.png" />
              <input type="number" id="cantidad" v-model="cantidad" />
              </div>
              <div className="Individual-gadget">
              <label for="cantidad">Xbox one</label>
              <img src="./src/assets/Gadgets/xbox.png" />
              <input type="number" id="cantidad" v-model="cantidad" />
              </div>
            </div>

          </form>
          <button onClick={onClose}>Cerrar</button>
          <button onClick={onClose}>Reservar</button>
        </div>
      )}
    </Html>
  );
};

export default PopUp;

  
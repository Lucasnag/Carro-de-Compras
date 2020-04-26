import React from 'react';
import './Registro.css';

const Registro = () => {
     return ( 
          <form>
               <legend>Registrate!</legend>
               <div className="input-field">
                    <label>Nombre y apellido </label>
                    <input type="text" placeholder="Tu Nombre" />
               </div>
               <div className="input-field">
                    <label>Usuario </label>
                    <input type="text" placeholder="Usuario" />
               </div>
               <div className="input-field">
                    <label>Contraseña </label>
                    <input type="text" placeholder="Password" />
               </div>
               
               <div className="input-field">
                    <label>Email </label>
                    <input type="text" placeholder="Email" />
               </div>

               <div className="input-field">
                    <label>Telefono: </label>
                    <input type="text" placeholder="Telefono" />
               </div>
               <div className="input-field enviar">
                    <input type="submit" value="Enviar" />
               </div>

          </form>
      );
}
 
export default Registro;
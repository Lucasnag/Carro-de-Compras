import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
     state = {}
     render() { 
          return (
               <div className="contenedor-nosotros">
                    <div className="imagen">
                         <img src="/img/nosotros.png" alt="imagen nosotros" />
                    </div>
                    <div className="contenido">
                         <h2>Sobre Nosotros</h2>
                         <p>Somos una tienda dedicada a la venta de articulos de Motocicleta</p>
                    </div>
               </div>

           )
     }
}
 
export default Nosotros;
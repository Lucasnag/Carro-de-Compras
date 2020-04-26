import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <header>
               <Link to={'/'}>
                    <img src="/img/logo1.png" alt="logo imagen"/>
               </Link>
          </header>
     )
}
 
export default Header;
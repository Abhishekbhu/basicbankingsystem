import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul> 
    
        <li>
          <Link to="/"><h1>Sparks Bank of India</h1></Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/customers">Account Holders</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

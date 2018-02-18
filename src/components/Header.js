import React from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">All Cats</Link><Link to="/favorites">Favorites</Link>
    </div>
  );
}

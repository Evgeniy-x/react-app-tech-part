import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Catalog = () => {
  return (
    <p>Catalog page</p>
    // <ul>
    //   {list.map(({ id, title }) => (
    //     <li key={id}>
    //       <Link to={`movies/${id}`} state={{ from: location }}>
    //         {title}
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default Catalog;

// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <p>Home page</p>

      <Link to={'/catalog'}>Catalog cars</Link>
    </>

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

export default Home;

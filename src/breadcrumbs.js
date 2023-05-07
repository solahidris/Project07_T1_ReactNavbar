import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs123 = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('//').filter((x) => x);

    return (
        <div className='Breadcrumbs'>
          <Link to="/">Home</Link>
          { pathnames.map((name,index) => {
              const goTo = '/${pathnames.slice(0,index+1).join("/")}';
              const isItLast = index === pathnames.length - 1;
              
              return isItLast ? (
                <span>{name}</span>
              ) : (
                <Link key={goTo} to={goTo}></Link>
              )
            })
            }
        </div>
    )
};

export default Breadcrumbs123;
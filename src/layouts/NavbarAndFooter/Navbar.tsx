import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {
    isAuthenticated: boolean;
    setIsAuthenticated: (auth: boolean) => void;
  }
  

  export const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

      const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
        navigate('/home');
      };

    
      return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
          <div className='container-fluid'>
            <span className='navbar-brand'>Wassup library</span>
            <button className='navbar-toggler' type='button'
              data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown' aria-expanded='false'
              aria-label='Toggle Navigation'
            >
              <span className='navbar-toggler-icon'> </span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to="/home">
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/search'>
                    Search Books
                  </NavLink>
                </li>
              </ul>
              <ul className='navbar-nav ms-auto'>
                {isAuthenticated ? (
                  <li className='nav-item m-1'>
                    <button type='button' className='btn btn-outline-light' onClick={handleLogout}>
                      Log out
                    </button>
                  </li>
                ) : (
                  <li className='nav-item m-1'>
                    <Link type='button' className='btn btn-outline-light' to='/signin'>Sign in</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      );
    };
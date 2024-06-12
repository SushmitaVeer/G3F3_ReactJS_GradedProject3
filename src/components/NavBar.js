import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../NavBar.css';

function NavBar({ onSearch }) {
    const [selectedLink, setSelectedLink] = useState('');
    const location = useLocation();

    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    React.useEffect(() => {
        setSelectedLink(location.pathname);
    }, [location.pathname]);

    return (
        <nav className="nav-bar">
            <div className="nav-links">
                <Link 
                    to="/in-theaters" 
                    className={`nav-link ${selectedLink === '/in-theaters' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('/in-theaters')}
                >
                    Movies In Theaters
                </Link>
                <Link 
                    to="/coming-soon" 
                    className={`nav-link ${selectedLink === '/coming-soon' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('/coming-soon')}
                >
                    Coming Soon
                </Link>
                <Link 
                    to="/top-rated-indian" 
                    className={`nav-link ${selectedLink === '/top-rated-indian' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('/top-rated-indian')}
                >
                    Top Rated Indian
                </Link>
                <Link 
                    to="/top-rated-movies" 
                    className={`nav-link ${selectedLink === '/top-rated-movies' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('/top-rated-movies')}
                >
                    Top Rated Movies
                </Link>
                <Link 
                    to="/favorites" 
                    className={`nav-link ${selectedLink === '/favorites' ? 'selected' : ''}`}
                    onClick={() => handleLinkClick('/favorites')}
                >
                    Favorites
                </Link>
            </div>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
                className="search-bar"
            />
        </nav>
    );
}

export default NavBar;

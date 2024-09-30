import React from 'react';
import Toggle from './Toggle';
import '../css/header.css';
const Header = ({ isOffline, searchQuery, toggleHandler }) => {
  return (
    <div className="toggle-container">
      {!isOffline ? (
        <h2 className="search-res">
          Search results for <span>{searchQuery}</span> ...
        </h2>
      ) : (
        <h2 className="search-res">You are now in Offline mode ...</h2>
      )}
      <Toggle label="Offline" checked={isOffline} onChange={toggleHandler} />
    </div>
  );
};

export default Header;

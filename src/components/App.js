import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import Toggle from './Toggle';

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`theme--${theme}`}>
      <div className="container">
        <div className="header">
          <div className="header-right">
            <Toggle onChangeHandler={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hot(module)(App);

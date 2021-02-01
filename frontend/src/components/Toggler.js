import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function Toggler() {

    
    return (
        <div className ="toggle">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      </div>
    );
  
}
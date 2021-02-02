import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'

export default function Toggler() {

    
    return (
    <div className="toggle">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>

            <Toggle
              defaultChecked={theme === 'dark'}
              aria-label='No label tag'
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} />
            {' '}
            <span>Dark Mode</span>
          </label>
        )}
      </ThemeToggler>
    </div>
  );

}
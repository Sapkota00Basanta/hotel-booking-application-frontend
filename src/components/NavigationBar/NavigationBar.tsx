// Import Third-party Modules
import React, { FC } from 'react'

// Import User-Defined Modules
import './NavigationBar.scss'
import { NavigationBarProps } from '../../interfaces/components/NavigationBar/NavigationBar.types'

export const NavigationBar: FC<NavigationBarProps> = ({ onLogin, onRegister }) => {
  return (
        <div className="navigationBar">
            <div className="navigationContainer">
                <span className="navigationBarlogo">Logo</span>
                <div className="navigationItems">
                    <button className="navigationButton" onClick={onRegister}>Register</button>
                    <button className="navigationButton" onClick={onLogin}>Login</button>
                </div>
            </div>
        </div>
  )
}

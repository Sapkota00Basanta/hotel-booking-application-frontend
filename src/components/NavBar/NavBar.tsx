//Import Third-party Modules
import React, {FC} from "react";

//Import User-Defined Modules
import "./NavBar.scss";
import { NavBarProps } from "../../interfaces/components/NavBar.types";

export const NavBar:FC<NavBarProps> = ({onLogin, onRegister}) => {
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
};